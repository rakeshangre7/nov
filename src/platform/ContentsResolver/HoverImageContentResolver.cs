using Newtonsoft.Json.Linq;
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
    public class HoverImageContentResolver : RenderingContentsResolver
    {
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            var dataSource = RenderingContext.Current.Rendering.Item;

            HoverImageModel hoverImageModel = new HoverImageModel();
            List<Object> hoverImages = new List<Object>();
            if (dataSource == null)
                return hoverImageModel;
            var processItem = ProcessItem(dataSource, rendering, renderingConfig);
            hoverImages.Add(new HoverImage()
            {
                HeadLine = processItem.Value<object>(HoverImageTemplate.Headline1FieldName),
                Body = processItem.Value<object>(HoverImageTemplate.Body1FieldName),
                ImageCropRegion = processItem.Value<object>(HoverImageTemplate.Image1CropRegionFieldName),
                Cta = NOVSitecoreHelper.GetLinkValue(dataSource,HoverImageTemplate.CTA1FieldId),
                Image = processItem.Value<object>(HoverImageTemplate.Image1FieldName)
            });

            hoverImages.Add(new HoverImage()
            {
                HeadLine = processItem.Value<object>(HoverImageTemplate.Headline2FieldName),
                Body = processItem.Value<object>(HoverImageTemplate.Body2FieldName),
                ImageCropRegion = processItem.Value<object>(HoverImageTemplate.Image2CropRegionFieldName),
                Cta = NOVSitecoreHelper.GetLinkValue(dataSource, HoverImageTemplate.CTA2FieldId),
                Image = processItem.Value<object>(HoverImageTemplate.Image2FieldName)
            });

            hoverImages.Add(new HoverImage()
            {
                HeadLine = processItem.Value<object>(HoverImageTemplate.Headline3FieldName),
                Body = processItem.Value<object>(HoverImageTemplate.Body3FieldName),
                ImageCropRegion = processItem.Value<object>(HoverImageTemplate.Image3CropRegionFieldName),
                Cta = NOVSitecoreHelper.GetLinkValue(dataSource, HoverImageTemplate.CTA3FieldId),
                Image = processItem.Value<object>(HoverImageTemplate.Image3FieldName)
            });

            return new { hoverImages };
        }
    }
}