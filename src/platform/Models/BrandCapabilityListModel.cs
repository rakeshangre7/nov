using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Helpers;

namespace XmCloudnov.Models
{
    public class BrandCapabilityListModel
    {
        public StringField Headling { get; set; }
        public StringField Description { get; set; }
        public ImageProperties Image { get; set; }
        public StringField BackgroundVideo { get; set; }
        public List<BrandCapabilityItem> BrandCapabilityList { get; set; }
        public StringField HelpText { get; set; }
        public bool HideSearch { get; set; }
    }

    public class BrandCapabilityItem
    {
        public StringField Name { get; set; }
        public StringField Url { get; set; }
    }
}