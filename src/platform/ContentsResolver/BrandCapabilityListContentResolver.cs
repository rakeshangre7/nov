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
using XmCloudnov.Helpers;
using XmCloudnov.Models;

namespace XmCloudnov.ContentsResolver
{
    public class BrandCapabilityListContentResolver : RenderingContentsResolver
    {
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            BrandCapabilityListModel model = new BrandCapabilityListModel();
            //var dataSource = RenderingContext.Current.Rendering.Item;
            var item = RenderingContext.Current.Rendering.Item;
            //var model = new BrandCapabilityListModel
            //{
            //    Headling = NOVSitecoreHelper.GetStringValue(item.Fields[]?.Value), , IBrandCapabilityListConstants.HeadlineFieldName)),
            //    Description = new HtmlString(FieldRenderer.Render(item, IBrandCapabilityListConstants.DescriptionFieldName)),
            //    BackgroundVideo = list.BackgroundVideo,
            //    Image = list.Image?.Src,
            //    BrandCapabilityList = new List<BrandCapabilityItem>()
            //};

            //var pageType = list.Taxonomy;
            //var page = Sitecore.Context.Item;
            //var children = page.Axes.GetDescendants();

            //switch (pageType)
            //{
            //    case Constants.BrandCapability.TypeBrand:
            //        var brandPages = new List<IBrandPage>();

            //        foreach (var child in children)
            //        {
            //            if (child.TemplateID.Equals(IBrandPageConstants.TemplateId.Guid))
            //            {
            //                var options = new GetItemByIdOptions(child.ID.Guid) { Language = list.Language };
            //                var glassChild = SitecoreService.GetItem<IBrandPage>(options);
            //                brandPages.Add(glassChild);
            //            }
            //        }
            //        brandPages = brandPages.Where(c => c.Brand != Guid.Empty).ToList();
            //        brandPages.ForEach(b => model.BrandCapabilityList.Add(new BrandCapabilityItem { Name = b.PageTitle, Url = b.Url }));

            //        break;

            //    case Constants.BrandCapability.TypeCapability:
            //        var capabilityPages = new List<ICapabilityPage>();

            //        foreach (var child in children)
            //        {
            //            if (child.TemplateID.Equals(ICapabilityPageConstants.TemplateId.Guid))
            //            {
            //                var options = new GetItemByIdOptions(child.ID.Guid) { Language = list.Language };
            //                var glassChild = SitecoreService.GetItem<ICapabilityPage>(options);
            //                capabilityPages.Add(glassChild);
            //            }
            //        }
            //        capabilityPages = capabilityPages.Where(c => c.Capability != Guid.Empty).ToList();
            //        capabilityPages.ForEach(b => model.BrandCapabilityList.Add(new BrandCapabilityItem { Name = b.PageTitle, Url = b.Url }));

            //        break;
            //}

            return model;
        }
    }
}