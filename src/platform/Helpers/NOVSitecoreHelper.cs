using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Resources.Media;
using XmCloudnov.Extensions;

namespace XmCloudnov.Helpers
{
    public static class NOVSitecoreHelper
    {
        public static NOVImage GetImage(Item item, ID fieldID)
        {
            Sitecore.Data.Fields.ImageField imgField = ((Sitecore.Data.Fields.ImageField)item.Fields[fieldID]);

            if (imgField != null && imgField.MediaItem != null)
            {
                MediaUrlOptions mediaUrlOptions = new MediaUrlOptions();
                mediaUrlOptions.AlwaysIncludeServerUrl = true;
                mediaUrlOptions.AbsolutePath = true;

                return new NOVImage()
                {
                    value = new ImageProperties()
                    {
                        src = Sitecore.Resources.Media.MediaManager.GetMediaUrl(imgField.MediaItem, mediaUrlOptions),
                        alt = imgField.Alt,
                        height = imgField.Height,
                        width = imgField.Width
                    }
                };
            }
            return new NOVImage();
        }

        public static StringField GetStringValue(string value)
        {
            return new StringField() { value = value };

        }

        public static NOVLink GetLinkValue(Item item, ID fieldID)
        {
            Sitecore.Data.Fields.LinkField linkField = (LinkField)item.Fields[fieldID];
            if (linkField != null && linkField.Target != null)
            {
                return new NOVLink()
                {
                    value = new LinkProperties()
                    {
                        href = item.GetFieldLinkUrl(fieldID),
                        linktype = linkField.LinkType,
                        anchor = linkField.Anchor,
                        target = linkField.Target,
                        text = linkField.Text,
                        url = item.GetFieldLinkUrl(fieldID),

                    }
                };
            }
            return new NOVLink();
        }
    }

    public class StringField
    {
        public string value { get; set; }

    }

    public class NOVLink
    {
        public LinkProperties value { get; set; }
    }

    public class LinkProperties
    {
        public string href { get; set; }
        public string text { get; set; }
        public string linktype { get; set; }
        public string url { get; set; }
        public string anchor { get; set; }
        public string target { get; set; }
    }

    public class NOVImage
    {
        public ImageProperties value { get; set; }
    }

    public class ImageProperties
    {
        public string src { get; set; }
        public string alt { get; set; }
        public string height { get; set; }
        public string width { get; set; }
    }
}