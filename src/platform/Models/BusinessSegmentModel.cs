using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace XmCloudnov.Models
{
    public class BusinessSegmentModel
    {
        public string Name
        {
            get; set;
        }

        public List<string> BusinessUnits
        {
            get; set;
        }

        public Guid Id { get; set; }
    }
}