using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using XmCloudnov.Constants;
using XmCloudnov.Helpers;

namespace XmCloudnov.Models
{
    public class ContentTeaserCard
    {
        public ContentTeaserCard()
        {
            CTALinkTarget = NovSitecoreConstants.LinkTargetSelf;
        }

        [ScriptIgnore]
        public Guid PageId { get; set; }

        public string Type { get; set; }

        [ScriptIgnore]
        public StringField ContentTag { get; set; }

        public StringField Heading { get; set; }

        public StringField Subheading { get; set; }

        public NOVImage Image { get; set; }

        //public string ImageAlt { get; set; }

        public string CTALink { get; set; }

        public string CTALinkTarget { get; set; }

        public string CTAText { get; set; }

        public StringField MetaDataBefore { get; set; }

        public StringField MetaDataAfter { get; set; }

        [ScriptIgnore]
        public StringField JobTitle { get; set; }

        [ScriptIgnore]
        public StringField JobLocation { get; set; }

        [ScriptIgnore]
        public StringField JobFunction { get; set; }

        [ScriptIgnore]
        public StringField Country { get; set; }

        [ScriptIgnore]
        public List<string> BusinessSegments { get; set; }

        [ScriptIgnore]
        public List<Guid> BusinessSegmentIds { get; set; }

        [ScriptIgnore]
        public List<string> BusinessUnits { get; set; }

        [ScriptIgnore]
        public StringField Year { get; set; }

        [ScriptIgnore]
        public StringField PublishedDate { get; set; }

        [ScriptIgnore]
        public StringField ProductName { get; set; }

        [ScriptIgnore]
        public StringField Brand { get; set; }

        [ScriptIgnore]
        public StringField Model { get; set; }

        [ScriptIgnore]
        public StringField Application { get; set; }

        [ScriptIgnore]
        public StringField Experience { get; set; }
    }
}