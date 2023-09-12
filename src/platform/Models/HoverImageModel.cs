using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Helpers;

namespace XmCloudnov.Models
{
    public class HoverImageModel
    {
        public HoverImageModel()
        {
            this.HoverImages = new List<HoverImage>();
        }
        public List<HoverImage> HoverImages { get; set; }
    }

    public class HoverImage
    {
        public object HeadLine { get; set; }
        public object Body { get; set; }
        public object Image { get; set; }
        public object ImageCropRegion { get; set; }
        public object Cta { get; set; }
    }
}