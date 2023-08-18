using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Linq;
using Sitecore;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.DependencyInjection;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;
using Sitecore.XA.Foundation.Navigation.Services;
using System.Collections.Generic;
using System.Linq;
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
                navigationModel.SiteFeaturedHeadline = NOVSitecoreHelper.GetStringValue(startItem.Fields[FeaturedStoryFields.FeaturedStoryHeadlineFieldId]?.Value);
                navigationModel.SiteFeaturedCtatext = NOVSitecoreHelper.GetStringValue(startItem.Fields[FeaturedStoryFields.FeaturedStoryCTATextFieldId]?.Value);
                navigationModel.SiteFeaturedAbstract = NOVSitecoreHelper.GetStringValue(startItem.Fields[FeaturedStoryFields.FeaturedStoryAbstractFieldId]?.Value);
                navigationModel.LearnMoreText = NOVSitecoreHelper.GetStringValue(startItem.Fields[HomeRootFields.LabelReadMoreFieldId]?.Value);
                navigationModel.CardImage = NOVSitecoreHelper.GetImage(startItem, HomeRootFields.CardImageFieldId);
                navigationModel.PortalDescription = NOVSitecoreHelper.GetStringValue(startItem.Fields[HomeRootFields.PortalDescriptionFieldId]?.Value);
                navigationModel.PortalHeader = NOVSitecoreHelper.GetStringValue(startItem.Fields[HomeRootFields.PortalHeaderFieldId]?.Value);
                navigationModel.PortalRegisterUrl = NOVSitecoreHelper.GetLinkValue(startItem, HomeRootFields.PortalRegisterUrlFieldId);
                navigationModel.PortalRegisterUrlText = NOVSitecoreHelper.GetStringValue(((LinkField)startItem.Fields[HomeRootFields.PortalRegisterUrlFieldId]).Text);
                navigationModel.PortalLoginUrl = NOVSitecoreHelper.GetLinkValue(startItem, HomeRootFields.NOVPortalLoginFieldId);
                navigationModel.PortalRegisterUrlText = NOVSitecoreHelper.GetStringValue(((LinkField)startItem.Fields[HomeRootFields.NOVPortalLoginFieldId]).Text);
                navigationModel.ViewAllText = NOVSitecoreHelper.GetStringValue(startItem.Fields[HomeRootFields.LabelViewAllFieldId]?.Value);
                var siteFeatureLink = NOVSitecoreHelper.GetLinkValue(startItem, HomeRootFields.FeaturedStorySubItemLinkFieldId);
                if (siteFeatureLink != null && siteFeatureLink.value != null && !string.IsNullOrEmpty(siteFeatureLink.value.href))
                {
                    navigationModel.SiteFeaturedCtaLink = siteFeatureLink;
                }
                else
                {
                    navigationModel.SiteFeaturedCtaLink = new NOVLink()
                    {
                        value = new LinkProperties()
                        {
                            href = startItem.GetUrl()
                        }
                    };
                }
                navigationModel.MenuLabel = NOVSitecoreHelper.GetStringValue(startItem.Fields[HomeRootFields.MenuLabelFieldId]?.Value);
                navigationModel.SiteLogo = NOVSitecoreHelper.GetImage(startItem, HomeRootFields.SiteLogoImageFieldId);
                navigationModel.SiteLogoTransparent = NOVSitecoreHelper.GetImage(startItem, HomeRootFields.SiteLogoTransparentImageFieldId);

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
                Url = new NOVLink()
                {
                    value = new LinkProperties()
                    {
                        href = Sitecore.Links.LinkManager.GetItemUrl(item)
                    }
                },
                MenuTitle = NOVSitecoreHelper.GetStringValue(StringUtil.GetString(item[MenuFields.MenuTitleFieldId], item[StandardContentFields.PageTitleFieldId])),
                MobileMenuTitle = NOVSitecoreHelper.GetStringValue(StringUtil.GetString(item[MenuFields.MobileMenuTitleFieldId], StringUtil.GetString(item[MenuFields.MenuTitleFieldId], item[StandardContentFields.PageTitleFieldId]))),

                IsActive = activeItem != null && activeItem.Paths.FullPath.StartsWith(item.Paths.FullPath),
                HideInNavigation = item.GetFieldAsBool(MenuFields.HideInNavigationFieldId),
                HideInFooterNavigation = item.GetFieldAsBool(MenuFields.HideInFooterNavigationFieldId),
                HideSubNavigation = item.GetFieldAsBool(MenuFields.HideSecondaryNavigationFieldId),
                SubMenuText = NOVSitecoreHelper.GetStringValue(item.GetFieldAsString(MenuFields.SubmenuTextFieldId)),
                Headline = NOVSitecoreHelper.GetStringValue(item.GetFieldAsString(StandardContentFields.HeadlineFieldId)),
                TemplateId = item.TemplateID,
                ItemId = item.ID,
                //PageImage = Html.Sitecore().FieldOpenGraphImageImageUrl(item).ToString(),

                CardImage = cardImage
            };


            if (item.HasBaseTemplate(Templates.Templates.RedirectPageTemplateIdString))
            {
                navigationEntry.Url = new NOVLink()
                {
                    value = new LinkProperties()
                    {
                        href = item.GetFieldLinkUrl(MenuFields.RedirectPageURLFieldId, out var linkTarget),
                        target = !string.IsNullOrEmpty(linkTarget) ? linkTarget : NovSitecoreConstants.LinkTargetSelf
                    }
                };
            }

            if (depth == Depth.One) //second level menu items - will show featured story
            {
                //Featured Story fields
                navigationEntry.FeaturedStoryHeadline = NOVSitecoreHelper.GetStringValue(item.GetFieldAsString(FeaturedStoryFields.FeaturedStoryHeadlineFieldId));
                navigationEntry.FeaturedStoryAbstract = NOVSitecoreHelper.GetStringValue(item.GetFieldAsString(FeaturedStoryFields.FeaturedStoryAbstractFieldId));

                var featuredSubItemLink = NOVSitecoreHelper.GetLinkValue(item, FeaturedStoryFields.FeaturedStorySubItemLinkFieldId);
                if (featuredSubItemLink != null && featuredSubItemLink.value != null && !string.IsNullOrEmpty(featuredSubItemLink.value.href))
                {
                    navigationEntry.FeaturedStoryCTALink = featuredSubItemLink;
                }
                else
                {
                    navigationEntry.FeaturedStoryCTALink = new NOVLink()
                    {
                        value = new LinkProperties()
                        {
                            href = Sitecore.Links.LinkManager.GetItemUrl(item)
                        }
                    };
                    //navigationEntry.FeaturedStoryCTALinkTarget = linkTarget;
                }

                //if (String.IsNullOrEmpty(navigationEntry.FeaturedStoryCTALinkTarget?.value))
                //{
                //    navigationEntry.FeaturedStoryCTALinkTarget = NovSitecoreConstants.LinkTargetSelf;
                //}

                navigationEntry.FeaturedStoryCTAText = NOVSitecoreHelper.GetStringValue(item.GetFieldAsString(FeaturedStoryFields.FeaturedStoryCTATextFieldId));
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