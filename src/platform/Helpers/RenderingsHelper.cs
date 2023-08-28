using Sitecore.Layouts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Sitecore.Data.Items;
using System.Web;

namespace XmCloudnov.Helpers
{
    public static class RenderingsHelper
    {
        public static RenderingReference[] GetListOfSublayouts(Item item)
        {
            RenderingReference[] renderings = null;

            if (item != null)
            {
                renderings = item.Visualization.GetRenderings(Sitecore.Context.Device, true);
            }

            return renderings;
        }

        public static string GetParentContainerUniqueId(string placeHolder)
        {
            var match = Regex.Match(placeHolder, @"[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?");

            if (match.Success)
            {
                return match.Value;
            }

            return string.Empty;
        }
    }
}