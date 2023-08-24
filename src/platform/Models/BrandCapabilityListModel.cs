using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Helpers;

namespace XmCloudnov.Models
{
    public class BrandCapabilityListModel
    {
        public object Headline { get; set; }
        public object Description { get; set; }
        public object Image { get; set; }
        public object BackgroundVideo { get; set; }
        public List<object> BrandCapabilityList { get; set; }
        public object HelpText { get; set; }
        public bool HideSearch { get; set; }
    }

    public class BrandCapabilityItem
    {
        public object Name { get; set; }
        public object Url { get; set; }
    }
}