using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data;
using Sitecore.Data.Items;

namespace XmCloudnov.Helpers
{
    public static class NOVSitecoreHelper
    {
        public static NOVImage GetImage(Item item, ID fieldID)
        {

            Sitecore.Data.Fields.ImageField imgField = ((Sitecore.Data.Fields.ImageField)item.Fields[fieldID]);

            if (imgField != null && imgField.MediaItem != null)
            {
                return new NOVImage()
                {
                    Url = Sitecore.Resources.Media.MediaManager.GetMediaUrl(imgField.MediaItem),
                    Alt = imgField.Alt,
                };
            }
            return new NOVImage();
        }
    }

    public class NOVImage
    {
        public string Url { get; set; }
        public string Alt { get; set; }
    }
}