using Microsoft.Extensions.DependencyInjection;
using Microsoft.Practices.EnterpriseLibrary.Common.Utility;
using Sitecore.Data;
using Sitecore.Data.DataSources;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.DependencyInjection;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;
using Sitecore.Services.Core.Model;
using Sitecore.Shell.Framework.Commands.TemplateBuilder;
using Sitecore.XA.Foundation.Navigation.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text.RegularExpressions;
using System.Web;
using XmCloudnov.Constants;
using XmCloudnov.Extensions;
using XmCloudnov.Helpers;
using XmCloudnov.Models;
using XmCloudnov.Templates;
using static XmCloudnov.Constants.NovSitecoreConstants;

namespace XmCloudnov.ContentsResolver
{
    public class FilteredFeedContentResolver : RenderingContentsResolver
    {
        private static Random rng = new Random();
        private const int TimoutHours = 2;
        private const string BusinessSegmentsCacheKeyFormat = "FilteredFeedHelper_BusinessSegments_{0}_{1}";
        private static readonly object businessSegmentsCacheLock = new object();
        protected INavigationService NavigationService { get; } = ServiceProviderServiceExtensions.GetService<INavigationService>(ServiceLocator.ServiceProvider);
        private static List<BusinessSegmentModel> BusinessSegments
        {
            get
            {
                // Cache the business segments for the current database and language
                return MemoryCache.Default.Get(string.Format(BusinessSegmentsCacheKeyFormat, Sitecore.Context.Database.Name, Sitecore.Context.Language.Name), businessSegmentsCacheLock, TimeSpan.FromHours(TimoutHours), GetBusinessSegments);
            }
        }

        private static List<BusinessSegmentModel> GetBusinessSegments()
        {
            // Get business segments, which will be used while creating cards and also while populating filters
            var businessSegments = new List<BusinessSegmentModel>();

            var businessSegmentsFodler = Sitecore.Context.Database.GetItem(ItemIds.BusinessSegmentsFolder, Sitecore.Context.Item.Language);

            if (businessSegmentsFodler != null &&
                businessSegmentsFodler.TemplateID.ToString().Equals(Template.BusinessSegmentFolderTemplateIdString))
            {
                foreach (Item glassBaseChild in businessSegmentsFodler.Children)
                {
                    if (glassBaseChild != null &&
                        glassBaseChild.TemplateID.ToString().Equals(Template.BusinessSegmentTemplateIdString))
                    {
                        var businessSegmentModel = new BusinessSegmentModel
                        {
                            Name = glassBaseChild.Fields[PageFields.BusinessSegmentNameFieldId]?.Value,
                            Id = glassBaseChild.ID.ToGuid(),
                            BusinessUnits = new List<string>()
                        };

                        MultilistField multiselectField = glassBaseChild.Fields[PageFields.BusinessUnitsFieldId];

                        Item[] businessUnits = multiselectField?.GetItems();

                        //Iterate through each item
                        if (businessUnits != null && businessUnits.Length > 0)
                        {
                            foreach (Item businessUnit in businessUnits)
                            {

                                if (businessUnit != null && businessUnit.TemplateID.ToString().Equals(Template.BusinessUnitTemplateIdString))
                                {
                                    businessSegmentModel.BusinessUnits.Add(businessUnit.Fields[PageFields.BusinessUnitNameFieldId]?.Value);
                                }
                            }

                            businessSegments.Add(businessSegmentModel);
                        }
                    }
                }
            }
            return businessSegments;
        }

        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var model = new FilteredFeedModel
            {
                Cards = new List<ContentTeaserCard>()
            };

            var dataSource = RenderingContext.Current.Rendering.Item;

            if (dataSource != null && dataSource.TemplateID.Equals(Template.FilteredFeedTemplateId))
            {
                var startItem = NavigationService.GetStartItem(dataSource, rendering);
                var sourceItemID = dataSource.Fields[FilteredFeedFields.SourceLocationFieldId]?.Value;
                var pageTemplateType = dataSource.Fields[FilteredFeedFields.PageTemplateFieldId]?.Value;
                if (string.IsNullOrEmpty(pageTemplateType) || !NovSitecoreConstants.FilteredFeedPageTypeMappings.ContainsKey(pageTemplateType))
                {
                    return model;
                }
                var pageTypesToDisplay = NovSitecoreConstants.FilteredFeedPageTypeMappings[pageTemplateType];
                if (sourceItemID != null)
                {
                    var sourceItem = dataSource.Database.GetItem(new ID(sourceItemID));
                    if (sourceItem != null)
                    {
                        var pages = sourceItem.Axes.GetDescendants().Where(i => i.HasBaseTemplate(new ID(Templates.Templates.ContentPageTemplateID)));

                        if (pages?.Count() > 0)
                        {
                            foreach (var page in pages)
                            {
                                if (pageTypesToDisplay.Contains(page.TemplateID))
                                {

                                    var contentTagId = page.Fields[PageFields.ContentTagFieldId]?.Value;
                                    Sitecore.Diagnostics.Log.Info("Before Switch loop Item ID" + page.ID.ToString(), this);
                                    Sitecore.Diagnostics.Log.Info("Before Switch loop Template ID" + page.TemplateID.ToString(), this);
                                    switch (page.TemplateID.ToString().ToLower())
                                    {
                                        case Template.ArticlePageTemplateIdString:
                                            {
                                                ContentTeaserCard card = new ContentTeaserCard();
                                                InitializeCard(startItem, page, card);
                                                GenerateImageForCard(startItem, card);
                                                model.Cards.Add(card);
                                                break;
                                            }
                                        case Template.EventDetailsPageTemplateIdString:
                                            {
                                                GenerateEventCard(model, startItem, page);
                                                break;
                                            }
                                        case Template.NewsPageTemplateIdString:
                                            {
                                                Sitecore.Diagnostics.Log.Info("In Switch loop- News condition" + page.TemplateID.ToString(), this);
                                                GenerateNewsCard(model, startItem, page);
                                                break;
                                            }
                                        case Template.EmployeeStoryPageTemplateIdString:
                                            {

                                                GenerateEmployeeCard(model, startItem, page);
                                                break;
                                            }
                                        case Template.BusinessUnitPageTemplateIdString:
                                            {
                                                GenerateBusinessUnitCard(model, startItem, page);
                                                break;
                                            }
                                    }

                                    var standardCard = new ContentTeaserCard();

                                    InitializeCard(startItem, page, standardCard);
                                    standardCard.Type = ContentTeaserCards.CardTypes.Standard;
                                    //standardCard.ContentTag = contentTag;
                                    GenerateImageForCard(startItem, standardCard);
                                    model.Cards.Add(standardCard);
                                }
                            }

                            var filteredFieldLearnmoreText = dataSource.Fields[FilteredFeedFields.LearnMoreTextFieldId]?.Value;
                            model.Cards.ForEach(c => c.CTAText = filteredFieldLearnmoreText == null || filteredFieldLearnmoreText == string.Empty ? c.CTAText : filteredFieldLearnmoreText);
                        }
                    }
                }

                var filterFieldSource = dataSource.Fields[FilteredFeedFields.FieldsFilterSourceFieldId]?.Value;
                if (filterFieldSource != null && filterFieldSource != Guid.Empty.ToString())
                {
                    var filterFieldSourceItem = dataSource.Database.GetItem(filterFieldSource);
                    if (filterFieldSourceItem != null)
                    {
                        model.Cards = FilterCardsByFields(model.Cards, filterFieldSourceItem);
                    }
                }
                var cards = model.Cards;
                if (dataSource.Fields[FilteredFeedFields.SortOrderFieldId]?.Value == ContentTeaserCards.SortOrder.Random)
                {
                    if (model.Cards.Any())
                    {
                        Shuffle(model.Cards);
                    }
                }
                model.Cards = cards;
                if (dataSource.Fields[FilteredFeedFields.SortOrderFieldId]?.Value != ContentTeaserCards.SortOrder.Random)
                {
                    SortCards(dataSource, model);
                }

                int.TryParse(dataSource.Fields[FilteredFeedFields.InitialItemCountFieldId]?.Value, out int initialCount);
                int.TryParse(dataSource.Fields[FilteredFeedFields.LoadMoreItemsCountFieldId]?.Value, out int loadMoreCount);
                int.TryParse(dataSource.Fields[FilteredFeedFields.MaxNumberOfItemsFieldId]?.Value, out int maxCardCount);

                model.Cards = maxCardCount < initialCount ? model.Cards.Take(maxCardCount).ToList() : model.Cards.Take(initialCount).ToList();
                model.LoadMoreText = dataSource.Fields[FilteredFeedFields.LoadMoreTextFieldId]?.Value;
                model.FilterByText = dataSource.Fields[FilteredFeedFields.FilterByTextFieldId]?.Value;
                model.ResetFiltersText = dataSource.Fields[FilteredFeedFields.ResetFilterTextFieldId]?.Value;
            }

            return model;
        }

        public static FilteredFeedModel SortCards(Item filteredFeed, FilteredFeedModel model)
        {
            var sortBy = filteredFeed.Fields[FilteredFeedFields.SortByFieldId]?.Value;
            var sortOrder = filteredFeed.Fields[FilteredFeedFields.SortOrderFieldId]?.Value;
            var cards = model.Cards;

            //random sort is done prior to filtering
            if (sortOrder == ContentTeaserCards.SortOrder.Random)
            {
                return model;
            }

            switch (sortBy)
            {
                case ContentTeaserCards.SortBy.Headline:
                    cards = sortOrder == ContentTeaserCards.SortOrder.Descending ? cards.OrderByDescending(c => c.Heading).ToList() : cards.OrderBy(c => c.Heading).ToList();
                    model.Cards = cards;
                    break;
                case ContentTeaserCards.SortBy.Date:
                    var cardsNoPublishedDate = cards.Where(c => String.IsNullOrEmpty(c.PublishedDate)).ToList();
                    var cardsPublishedDate = cards.Where(c => !String.IsNullOrEmpty(c.PublishedDate)).ToList();
                    cardsPublishedDate = sortOrder == ContentTeaserCards.SortOrder.Descending ? cardsPublishedDate.OrderByDescending(c => DateTime.Parse(c.PublishedDate)).ToList() : cardsPublishedDate.OrderBy(c => DateTime.Parse(c.PublishedDate)).ToList();

                    if (sortOrder == ContentTeaserCards.SortOrder.Descending)
                    {
                        cardsPublishedDate.AddRange(cardsNoPublishedDate);
                        model.Cards = cardsPublishedDate;
                    }
                    else
                    {
                        cardsNoPublishedDate.AddRange(cardsPublishedDate);
                        model.Cards = cardsNoPublishedDate;
                    }
                    break;
            }

            return model;
        }

        public static void Shuffle(List<ContentTeaserCard> list)
        {
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                ContentTeaserCard value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }

        public static List<ContentTeaserCard> FilterCardsByFields(List<ContentTeaserCard> cards, Item fieldsFilterSourceItem)
        {
            var items = new List<Item>();
            items.AddRange(fieldsFilterSourceItem.Axes.GetDescendants().Where(i => i.TemplateID == new ID(Template.FieldDictionaryTemplateIdString)));
            var fields = new List<Item>();
            foreach (var item in items)
            {
                if (item != null)
                {
                    fields.Add(item);
                }
            }

            var filteredCards = new List<ContentTeaserCard>();
            foreach (var card in cards)
            {
                var item = fieldsFilterSourceItem.Database.GetItem(new ID(card.PageId));
                if (item == null)
                {
                    continue;
                }

                foreach (var field in fields)
                {
                    var itemField = item.Fields[field.Fields[Templates.FieldDictionary.FieldNameFieldId]?.Value];
                    if (itemField == null
                        || !string.Equals(itemField.Value, field.Fields[Templates.FieldDictionary.FieldValueFieldId]?.Value, StringComparison.CurrentCultureIgnoreCase))
                    {
                        continue;
                    }

                    filteredCards.Add(card);
                    break;
                }
            }

            return filteredCards;
        }

        private static void GenerateBusinessUnitCard(FilteredFeedModel model, Item startItem, Item page)
        {
            var buCard = new ContentTeaserCard();

            InitializeCard(startItem, page, buCard);
            ReferenceField businessUnitField = page.Fields[PageFields.BusinessUnitFieldId];
            if (businessUnitField != null && businessUnitField.TargetItem != null)
            {
                foreach (var segment in BusinessSegments)
                {
                    if (segment.BusinessUnits != null && segment.BusinessUnits.Contains(businessUnitField.TargetItem.Fields[PageFields.BusinessUnitNameFieldId]?.Value))
                    {
                        buCard.BusinessSegments.Add(segment.Name);
                        buCard.BusinessSegmentIds.Add(segment.Id);
                    }
                }
            }
            buCard.Type = ContentTeaserCards.CardTypes.BusinessUnit;

            GenerateImageForCard(startItem, buCard);

            //card.ContentTag =  TODO: Set
            model.Cards.Add(buCard);
        }

        private static void GenerateEmployeeCard(FilteredFeedModel model, Item startItem, Item page)
        {
            var employeeCard = new ContentTeaserCard();
            InitializeCard(startItem, page, employeeCard);
            employeeCard.Heading = page.Fields[PageFields.PageTitleFieldId]?.Value;
            employeeCard.Type = ContentTeaserCards.CardTypes.Employee;
            employeeCard.Country = page.Fields[PageFields.CountryFieldId]?.Value;
            employeeCard.JobFunction = page.Fields[PageFields.JobFunctionFieldId]?.Value;
            employeeCard.JobTitle = page.Fields[PageFields.JobTitleFieldId]?.Value;
            employeeCard.JobLocation = page.Fields[PageFields.JobLocationFieldId]?.Value;
            employeeCard.MetaDataBefore = page.Fields[PageFields.JobFunctionFieldId]?.Value;
            employeeCard.Experience = page.Fields[PageFields.ExperienceFieldId]?.Value;
            employeeCard.Subheading = string.Empty;

            if (!string.IsNullOrEmpty(employeeCard.JobTitle))
            {
                var titleLabel = startItem.GetFieldAsString(HomeRootFields.PositionFieldId);
                employeeCard.Subheading = titleLabel + employeeCard.JobTitle + NovSitecoreConstants.BRTag;
            }

            if (!string.IsNullOrEmpty(employeeCard.JobLocation))
            {
                var locationLabel = startItem.GetFieldAsString(HomeRootFields.LocationFieldId);
                employeeCard.Subheading += locationLabel + employeeCard.JobLocation + NovSitecoreConstants.BRTag;
            }

            if (!string.IsNullOrEmpty(employeeCard.Experience))
            {
                var experienceLabel = startItem.GetFieldAsString(HomeRootFields.ExperienceFieldId);
                employeeCard.Subheading += experienceLabel + employeeCard.Experience + NovSitecoreConstants.BRTag;
            }
            GenerateImageForCard(startItem, employeeCard);

            //card.ContentTag =  TODO: Set
            model.Cards.Add(employeeCard);
        }

        private static void GenerateNewsCard(FilteredFeedModel model, Item startItem, Item page)
        {
            var newsCard = new ContentTeaserCard();
            InitializeCard(startItem, page, newsCard);

            newsCard.Type = ContentTeaserCards.CardTypes.News;
            DateField newsDate = (DateField)page.Fields[PageFields.NewsPageDateFieldId];
            newsCard.Year = newsDate?.DateTime.Year.ToString();
            newsCard.MetaDataBefore = ContentPageTypes.News;

            var publishedDate = newsDate?.DateTime != DateTime.MinValue
? newsDate?.DateTime.ToString(ContentTeaserCards.DateFormats.ContentCardDateFormat) : string.Empty;
            if (!string.IsNullOrEmpty(publishedDate))
            {
                newsCard.PublishedDate = publishedDate;
                newsCard.MetaDataBefore = newsCard.MetaDataBefore + (string.IsNullOrEmpty(newsCard.MetaDataBefore) ? string.Empty : ContentTeaserCards.Separator) + publishedDate;
            }
            GenerateImageForCard(startItem, newsCard);
            Sitecore.Diagnostics.Log.Info("End of news card " + page.TemplateID.ToString(), newsCard);
            model.Cards.Add(newsCard);
        }

        private static void GenerateEventCard(FilteredFeedModel model, Item startItem, Item page)
        {
            DateField endDateField = (DateField)page.Fields[PageFields.EndDateFieldId];
            ContentTeaserCard eventDetailsCard = new ContentTeaserCard();
            if (endDateField != null && endDateField.DateTime > DateTime.Today)
            {
                InitializeCard(startItem, page, eventDetailsCard);
                eventDetailsCard.Type = NovSitecoreConstants.ContentTeaserCards.CardTypes.Event;
                var location = page.Fields[PageFields.CityFieldId]?.Value;
                var country = page.Fields[PageFields.CountryFieldId]?.Value;
                if (!string.IsNullOrEmpty(country))
                {
                    location = location.Length > 0 ? location + NovSitecoreConstants.ContentTeaserCards.Separator + country : country;
                    eventDetailsCard.Country = country;
                }
                eventDetailsCard.MetaDataBefore = location;

            }

            DateField startDateField = (DateField)page.Fields[PageFields.StartDateFieldId];
            if (startDateField?.DateTime != DateTime.MinValue && endDateField?.DateTime != DateTime.MinValue)
            {
                var date = startDateField?.DateTime.ToString(ContentTeaserCards.DateFormats.ContentCardDateFormat);

                if (startDateField?.DateTime.Year == endDateField?.DateTime.Year &&
                        startDateField?.DateTime.Month == endDateField?.DateTime.Month)
                {
                    date = startDateField?.DateTime.ToString(ContentTeaserCards.DateFormats.MonthFormat) + " " + startDateField?.DateTime.Day + "-" +
                                endDateField?.DateTime.Day + ", " + startDateField?.DateTime.Year;
                }
                else
                {
                    date = startDateField?.DateTime.ToString(ContentTeaserCards.DateFormats.ContentCardDateFormat) + " - " +
                           endDateField?.DateTime.ToString(ContentTeaserCards.DateFormats.ContentCardDateFormat);
                }

                eventDetailsCard.MetaDataAfter = date;
            }
            GenerateImageForCard(startItem, eventDetailsCard);

            //card.ContentTag =  TODO: Set
            model.Cards.Add(eventDetailsCard);
        }

        private static void GenerateImageForCard(Item startItem, ContentTeaserCard card)
        {
            var image = NOVSitecoreHelper.GetImage(startItem, PageFields.CardImageFieldId);
            if (image != null)
            {
                card.Image = image.Url;
                card.ImageAlt = image.Alt;
            }
            //card.ContentTag =  TODO: Set
        }

        private static void InitializeCard(Item startItem, Item page, ContentTeaserCard card)
        {
            card.PageId = page.ID.ToGuid();
            card.Heading = page.Fields[PageFields.HeadlineFieldId]?.Value;
            card.Subheading = HttpUtility.HtmlDecode(Regex.Replace(page.Fields[PageFields.SubheadingFieldId]?.Value, "<.*?>", String.Empty));
            card.CTALink = page.GetUrl();
            card.CTAText = startItem.Fields[HomeRootFields.LabelReadMoreFieldId]?.Value;
        }
    }
}