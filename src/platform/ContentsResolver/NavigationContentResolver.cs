using DocumentFormat.OpenXml.EMMA;
using Microsoft.AspNet.OData;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Linq;
using Sitecore;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.DependencyInjection;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.LayoutService.ItemRendering.Pipelines.GetLayoutServiceContext;
using Sitecore.Mvc.Helpers;
using Sitecore.Mvc.Presentation;
using Sitecore.XA.Foundation.Navigation.Services;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Constants;
using XmCloudnov.Extensions;
using XmCloudnov.Helpers;
using XmCloudnov.Models;
using XmCloudnov.Templates;

namespace XmCloudnov.ContentResolver
{
    public enum Depth
    {
        One, Two, Three, Four
    }
    public class NavigationContentResolver : RenderingContentsResolver
    {
        protected INavigationService NavigationService { get; } = ServiceProviderServiceExtensions.GetService<INavigationService>(ServiceLocator.ServiceProvider);
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            Item datasourceItem = Context.Item;
            Item startItem = NavigationService.GetStartItem(datasourceItem, rendering);
            IEnumerable<Item> menuItems = new List<Item>();
            NavigationModel navigationModel = new NavigationModel();
            if (startItem != null)
            {
                menuItems = startItem.Children.Where(item => item.HasBaseTemplate(new Sitecore.Data.ID(XmCloudnov.Templates.Templates.ContentPageTemplateID)));
                navigationModel.SiteFeaturedHeadline = startItem.Fields[FeaturedStoryFields.FeaturedStoryHeadlineFieldId]?.Value;
                navigationModel.SiteFeaturedCtatext = startItem.Fields[FeaturedStoryFields.FeaturedStoryCTATextFieldId]?.Value;
                navigationModel.SiteFeaturedAbstract = startItem.Fields[FeaturedStoryFields.FeaturedStoryAbstractFieldId]?.Value;
                navigationModel.LearnMoreText = startItem.Fields[HomeRootFields.LabelReadMoreFieldId]?.Value;
                navigationModel.CardImage = NOVSitecoreHelper.GetImage(startItem, HomeRootFields.CardImageFieldId);
                navigationModel.PortalDescription = startItem.Fields[HomeRootFields.PortalDescriptionFieldId]?.Value;
                navigationModel.PortalHeader = startItem.Fields[HomeRootFields.PortalHeaderFieldId]?.Value;
                navigationModel.PortalRegisterUrl = ((LinkField)startItem.Fields[HomeRootFields.PortalRegisterUrlFieldId]).GetFriendlyUrl();
                navigationModel.PortalRegisterUrlText = ((LinkField)startItem.Fields[HomeRootFields.PortalRegisterUrlFieldId]).Text;
                navigationModel.PortalLoginUrl = ((LinkField)startItem.Fields[HomeRootFields.NOVPortalLoginFieldId]).GetFriendlyUrl();
                navigationModel.PortalRegisterUrlText = ((LinkField)startItem.Fields[HomeRootFields.NOVPortalLoginFieldId]).Text;
                navigationModel.ViewAllText = startItem.Fields[HomeRootFields.LabelViewAllFieldId]?.Value;
                var siteFeatureLink = ((LinkField)startItem.Fields[HomeRootFields.FeaturedStorySubItemLinkFieldId]).GetFriendlyUrl() ?? string.Empty;
                navigationModel.SiteFeaturedCtaLink = !string.IsNullOrEmpty(siteFeatureLink) ? siteFeatureLink : startItem.GetUrl();
                navigationModel.MenuLabel = startItem.Fields[HomeRootFields.MenuLabelFieldId]?.Value;
                navigationModel.SiteLogo = NOVSitecoreHelper.GetImage(startItem, HomeRootFields.SiteLogoImageFieldId);

                foreach (Item item in startItem.Children.Where(i => i.Language == Context.Language))
                {
                    if (!item.HasBaseTemplate(new ID(Templates.Templates.ContentPageTemplateID)))
                    {
                        continue;
                    }
                    var entry = PopulateNavigationEntry(item, startItem, Depth.One); //children of Home item

                    if (entry == null)
                    {
                        continue;
                    }

                    navigationModel.NavigationEntries.Add(entry);

                }

            }

            JObject jobject = new JObject()
            {
                ["items"] = (JToken)new JArray()
            };
            jobject["items"] = ProcessItems(menuItems, rendering, renderingConfig);
            return navigationModel;
        }

        private NavigationEntryModel PopulateNavigationEntry(Item item, Item activeItem, Depth depth)
        {
            var cardImage = NOVSitecoreHelper.GetImage(item, ContentPageFields.CardImageFieldId);
            var navigationEntry = new NavigationEntryModel()
            {
                Url = item.GetUrl(),
                MenuTitle = StringUtil.GetString(item[MenuFields.MenuTitleFieldId], item[StandardContentFields.PageTitleFieldId]),
                MobileMenuTitle = StringUtil.GetString(item[MenuFields.MobileMenuTitleFieldId], StringUtil.GetString(item[MenuFields.MenuTitleFieldId], item[StandardContentFields.PageTitleFieldId])),
                IsActive = activeItem != null && activeItem.Paths.FullPath.StartsWith(item.Paths.FullPath),
                HideInNavigation = item.GetFieldAsBool(MenuFields.HideInNavigationFieldId),
                HideInFooterNavigation = item.GetFieldAsBool(MenuFields.HideInFooterNavigationFieldId),
                HideSubNavigation = item.GetFieldAsBool(MenuFields.HideSecondaryNavigationFieldId),
                SubMenuText = item.GetFieldAsString(MenuFields.SubmenuTextFieldId),
                Headline = item.GetFieldAsString(StandardContentFields.HeadlineFieldId),
                TemplateId = item.TemplateID,
                ItemId = item.ID,
                //PageImage = Html.Sitecore().FieldOpenGraphImageImageUrl(item).ToString(),

                CardImage = cardImage?.Url,
                CardImageAlt = cardImage?.Alt
            };

            if (depth == Depth.One) //second level menu items - will show featured story
            {
                //Featured Story fields
                navigationEntry.FeaturedStoryHeadline = item.GetFieldAsString(FeaturedStoryFields.FeaturedStoryHeadlineFieldId);
                navigationEntry.FeaturedStoryAbstract = item.GetFieldAsString(FeaturedStoryFields.FeaturedStoryAbstractFieldId);

                if (string.IsNullOrEmpty(item.GetFieldLinkUrl(FeaturedStoryFields.FeaturedStorySubItemLinkFieldId)))
                {
                    navigationEntry.FeaturedStoryCTALink = item.GetUrl();
                }
                else
                {
                    navigationEntry.FeaturedStoryCTALink = item.GetFieldLinkUrl(FeaturedStoryFields.FeaturedStorySubItemLinkFieldId, out var linkTarget);
                    navigationEntry.FeaturedStoryCTALinkTarget = linkTarget;
                }

                if (String.IsNullOrEmpty(navigationEntry.FeaturedStoryCTALinkTarget))
                {
                    navigationEntry.FeaturedStoryCTALinkTarget = NovSitecoreConstants.LinkTargetSelf;
                }

                navigationEntry.FeaturedStoryCTAText = item.GetFieldAsString(FeaturedStoryFields.FeaturedStoryCTATextFieldId);
            }

            //
            if (depth == Depth.One)
            {
                var items = item.GetChildren().
                    Where(childItem => !childItem.GetFieldAsBool(MenuFields.HideInNavigationFieldId)).
                    ToList();

                foreach (var childItem in items) //by brand, by category, training, resources, etc
                {
                    if (!childItem.HasBaseTemplate(new ID(Templates.Templates.ContentPageTemplateID)))
                    {
                        continue;
                    }
                    navigationEntry.SubPages.Add(PopulateNavigationEntry(childItem, activeItem, Depth.Two));
                }
            }

            if (depth == Depth.Two)
            {
                var children = item.GetChildren().
                    Where(childItem => !childItem.GetFieldAsBool(MenuFields.HideInNavigationFieldId)).
                    ToList();


                if (item.HasBaseTemplate(new ID(Templates.Templates.BrandCapabilityOverviewPageTemplateID))) //get six cards
                {
                    children = children.Where(c => c.GetFieldAsBool(ShowInCategoryMenuFields.ShowInMenuFieldId)).ToList();

                    if (children.Any())
                    {
                        children = children.Take(6).ToList();
                    }
                }

                foreach (var childItem in children)
                {
                    if (!childItem.HasBaseTemplate(new ID(Templates.Templates.ContentPageTemplateID)))
                    {
                        continue;
                    }
                    navigationEntry.SubPages.Add(PopulateNavigationEntry(childItem, activeItem, Depth.Three));
                }
            }

            return navigationEntry;

        }


    }
}