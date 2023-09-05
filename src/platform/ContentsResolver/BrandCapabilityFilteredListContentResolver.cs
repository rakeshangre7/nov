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
    public class BrandCapabilityFilteredListContentResolver : RenderingContentsResolver
    {
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var item = Sitecore.Context.Item;
            if (item == null)
                return null;
            var processItem = ProcessItem(item, rendering, renderingConfig);

            BrandCapabilityListModel model = new BrandCapabilityListModel
            {
                BrandCapabilityList = new List<object>()
            };

            var datasourceItem = RenderingContext.Current.Rendering.Item;

            var proccessDatasourceItem = ProcessItem(datasourceItem, rendering, renderingConfig);

            var pageType = item.Fields["taxonomy"]?.Value;
            var childItems = item.Children.Where(c => c.TemplateID.Equals(BrandCapabilityTemplate.BrandCapabilityTemplateId) || c.TemplateID.Equals(CapabilityTemplate.CapabilityTemplateId));

            switch (pageType)
            {
                case NovSitecoreConstants.BrandCapability.TypeBrand:

                    foreach (var child in childItems)
                    {
                        if (child.TemplateID.Equals(BrandCapabilityTemplate.BrandCapabilityTemplateId.Guid))
                        {
                            if (child.Fields["brand"]?.Value != Guid.Empty.ToString())
                            {
                                var childProcessItem = ProcessItem(child, rendering, renderingConfig);
                                model.BrandCapabilityList.Add(new { headline = childProcessItem.Value<object>("headline"), url = Sitecore.Links.LinkManager.GetItemUrl(child) });
                            }

                        }
                    }
                    model.HelpText = proccessDatasourceItem.Value<object>("brandsHelpText");
                    break;

                case NovSitecoreConstants.BrandCapability.TypeCapability:

                    foreach (var child in childItems)
                    {
                        if (child.TemplateID.Equals(CapabilityTemplate.CapabilityTemplateId.Guid))
                        {
                            if (child.Fields["capability"]?.Value != Guid.Empty.ToString())
                            {
                                var childProcessItem = ProcessItem(child, rendering, renderingConfig);
                                model.BrandCapabilityList.Add(new { headline = childProcessItem.Value<object>("headline"), url = Sitecore.Links.LinkManager.GetItemUrl(child) });
                            }
                        }
                    }
                    model.HelpText = proccessDatasourceItem.Value<object>("capabilitiesHelpText");
                    break;
            }

            return model;
        }
    }
}