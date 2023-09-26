using DocumentFormat.OpenXml.Office2010.ExcelAc;
using Newtonsoft.Json.Linq;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Helpers;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Constants;
using XmCloudnov.Helpers;
using XmCloudnov.Models;
using XmCloudnov.Templates;

namespace XmCloudnov.ContentsResolver
{
    public class BrandCapabilityListContentResolver : RenderingContentsResolver
    {
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var item = RenderingContext.Current.Rendering.Item;
            if (item == null || item == Sitecore.Context.Item)
                return null;
            var processItem = ProcessItem(item, rendering, renderingConfig);

            BrandCapabilityListModel model = new BrandCapabilityListModel
            {
                Headline = processItem.Value<object>("headline"),
                Description = processItem.Value<object>("description"),
                BackgroundVideo = processItem.Value<object>("backgroundVideo"),
                Image = processItem.Value<object>("image"),
                BrandCapabilityList = new List<object>()
            };

            var pageType = item.Fields["taxonomy"]?.Value;
            var page = Sitecore.Context.Item;
            var children = page.Axes.GetDescendants();

            switch (pageType)
            {
                case NovSitecoreConstants.BrandCapability.TypeBrand:

                    foreach (var child in children)
                    {
                        if (child.TemplateID.Equals(BrandCapabilityTemplate.BrandCapabilityTemplateId.Guid))
                        {
                            if (!string.IsNullOrEmpty(child.Fields["brand"]?.Value) && child.Fields["brand"]?.Value != Guid.Empty.ToString())
                            {
                                var childProcessItem = ProcessItem(child, rendering, renderingConfig);
                                model.BrandCapabilityList.Add(new NOVLink() { value = new LinkProperties() { text = child.Fields["pageTitle"]?.ToString(), href = Sitecore.Links.LinkManager.GetItemUrl(child) } });
                            }

                        }
                    }
                    break;

                case NovSitecoreConstants.BrandCapability.TypeCapability:

                    foreach (var child in children)
                    {
                        if (child.TemplateID.Equals(CapabilityTemplate.CapabilityTemplateId.Guid))
                        {
                            if (!string.IsNullOrEmpty(child.Fields["capability"]?.Value) && child.Fields["capability"]?.Value != Guid.Empty.ToString())
                            {
                                var childProcessItem = ProcessItem(child, rendering, renderingConfig);
                                model.BrandCapabilityList.Add(new NOVLink() { value = new LinkProperties() { text = child.Fields["pageTitle"]?.ToString(), href = Sitecore.Links.LinkManager.GetItemUrl(child) } });
                            }
                        }
                    }
                    break;
            }

            return model;
        }
    }
}