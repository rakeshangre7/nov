using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace XmCloudnov.Models
{
    public class FilteredFeedModel
    {
        public Guid FilteredFeedId { get; set; }
        public List<ContentTeaserCard> Cards { get; set; }

        [JsonIgnore]
        public Dictionary<string, List<string>> Filters { get; set; }

        [JsonIgnore]
        public Dictionary<string, List<string>> BusinessSegmentFilters { get; set; }

        [JsonIgnore]
        public Dictionary<string, List<string>> DateFiters { get; set; }

        public bool ShowFilter { get; set; }
        public int CurrentPageIndex { get; set; }

        [JsonIgnore]
        public Dictionary<string, string> FilterLabels { get; set; }

        [JsonIgnore]
        public Dictionary<string, string> AnyFilterValueLabels { get; set; }

        [JsonIgnore]
        public string LoadMoreText { get; set; }

        [JsonIgnore]
        public string FilterByText { get; set; }

        [JsonIgnore]
        public string ResetFiltersText { get; set; }

        public bool HasMore { get; set; }


        [JsonIgnore]
        public bool HasSourceLocation { get; set; }

        [JsonIgnore]
        public string NoCardsText { get; set; }

        [JsonIgnore]
        public string PreSelectedBuinessSegment { get; set; }
    }

    public class FilterOptions
    {
        public string When { get; set; }

        public string ArticleType { get; set; }

        public string Experience { get; set; }

        public string JobFunction { get; set; }

        public string Country { get; set; }

        public string BusinessSegment { get; set; }
    }
}