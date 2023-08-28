using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Helpers;
using XmCloudnov.Models;
using XmCloudnov.Templates;

namespace XmCloudnov.ContentsResolver
{
    public class ProductTabsContentResolver : RenderingContentsResolver
    {
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var dataSource = RenderingContext.Current.Rendering.Item;
            if (dataSource == null)
                return null;
            var processItem = ProcessItem(dataSource, rendering, renderingConfig);
            var pageRenderings = RenderingsHelper.GetListOfSublayouts(Sitecore.Context.Item);
            var containerRenderingId = RenderingContext.Current.Rendering.UniqueId;

            var productTabRenderings = pageRenderings.Where(r => r.Placeholder.ToLower().Contains("product-tabs-container") && !r.Placeholder.ToLower().Contains("product-tab-content") &&
                                                                 r.Placeholder.ToLower().Contains(containerRenderingId.ToString().ToLower()));
            List<object> productTabs = new List<object>();
            foreach (var ptabrendering in productTabRenderings)
            {
                if (dataSource.TemplateID.Equals(ProductTabTemplate.TemplateId))
                {
                    var productTab = new
                    {
                        label = processItem.Value<object>("label"),
                        id =productTabs.Count.ToString(),
                        isActive = (ptabrendering == productTabRenderings.First()? "is-open":string.Empty),
                        tabIcon = processItem.Value<object>("icon"),
                        tabid = dataSource.ID.Guid.ToString(),
                    };
                    productTabs.Add(productTab);
                }
            }
            return productTabs;

        }
    }
}