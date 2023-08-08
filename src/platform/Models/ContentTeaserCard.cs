using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using XmCloudnov.Constants;

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
        public string ContentTag { get; set; }

        public string Heading { get; set; }

        public string Subheading { get; set; }

        public string Image { get; set; }

        public string ImageAlt { get; set; }

        public string CTALink { get; set; }

        public string CTALinkTarget { get; set; }

        public string CTAText { get; set; }

        public string MetaDataBefore { get; set; }

        public string MetaDataAfter { get; set; }

        [ScriptIgnore]
        public string JobTitle { get; set; }

        [ScriptIgnore]
        public string JobLocation { get; set; }

        [ScriptIgnore]
        public string JobFunction { get; set; }

        [ScriptIgnore]
        public string Country { get; set; }

        [ScriptIgnore]
        public List<string> BusinessSegments { get; set; }

        [ScriptIgnore]
        public List<Guid> BusinessSegmentIds { get; set; }

        [ScriptIgnore]
        public List<string> BusinessUnits { get; set; }

        [ScriptIgnore]
        public string Year { get; set; }

        [ScriptIgnore]
        public string PublishedDate { get; set; }

        [ScriptIgnore]
        public string ProductName { get; set; }

        [ScriptIgnore]
        public string Brand { get; set; }

        [ScriptIgnore]
        public string Model { get; set; }

        [ScriptIgnore]
        public string Application { get; set; }

        [ScriptIgnore]
        public string Experience { get; set; }
    }
}