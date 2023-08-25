using DocumentFormat.OpenXml.EMMA;
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
    public class ProductTabContentResolver : RenderingContentsResolver
    {
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var dataSource = RenderingContext.Current.Rendering.Item;
            if (dataSource == null)
                return null;
            var processItem = ProcessItem(dataSource, rendering, renderingConfig);


            var productTab = new
            {
                label = processItem.Value<object>("label"),
                id = dataSource.ID.Guid,
                tabIcon = processItem.Value<object>("icon"),
                isActive = string.Empty
            };

            //get list of renderings on the page
            var pageRenderings = RenderingsHelper.GetListOfSublayouts(Sitecore.Context.Item);

            //get unique id of the parent product tabs container that contains this product tab
            var productTabContainerUniqueId = RenderingsHelper.GetParentContainerUniqueId(RenderingContext.Current.Rendering.Placeholder);


            if (!string.IsNullOrEmpty(productTabContainerUniqueId))
            {
                //get all product tabs that are in the parent container with the above unique id
                var productTabRenderings = pageRenderings.Where(r =>
                    r.Placeholder.Contains("product-tabs-container") && !r.Placeholder.Contains("product-tab-content")
                                                                     && r.Placeholder.Contains(productTabContainerUniqueId));

                //set class is-open on the first product tab in the parent container
                if (productTabRenderings.Any())
                {
                    var firstProductTabRenderingID = productTabRenderings.FirstOrDefault().Settings.DataSource;
                    if (firstProductTabRenderingID.ToLower() == productTab.id.ToString("B").ToLower())
                    {
                        productTab = new
                        {
                            label = processItem.Value<object>("label"),
                            id = dataSource.ID.Guid,
                            tabIcon = processItem.Value<object>("icon"),
                            isActive = "is-open"
                    };
                    }
                }
            }
            return productTab;

        }
    }
}