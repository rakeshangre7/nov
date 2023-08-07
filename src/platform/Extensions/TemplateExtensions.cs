using Sitecore.Data;
using Sitecore.Data.Templates;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace XmCloudnov.Extensions
{
    public static class TemplateExtensions
    {
        private static readonly object basetemplateMapLock = new object();
        private static Dictionary<ID, TemplateList> basetemplatesMap = new Dictionary<ID, TemplateList>();
        private static IEnumerable<Template> GetBaseTemplates(Template template)
        {
            if (!basetemplatesMap.ContainsKey(template.ID))
            {
                lock (basetemplateMapLock)
                {
                    if (!basetemplatesMap.ContainsKey(template.ID))
                    {
                        basetemplatesMap[template.ID] = template.GetBaseTemplates();
                    }
                }
            }

            return basetemplatesMap[template.ID];
        }

        /// <summary>
		/// Determines whether the specified template has a specific base template. 
		/// </summary>
		/// <param name="template">The template.</param>
		/// <param name="baseTemplateId">The base template id.</param>
		/// <returns>true if it has the base template; otherwise, false. </returns>
		public static bool HasBaseTemplate(this Template template, ID baseTemplateId)
        {
            if (template.ID == baseTemplateId)
            {
                return true;
            }

            foreach (var basetemplate in GetBaseTemplates(template))
            {
                if (basetemplate.ID == baseTemplateId)
                {
                    return true;
                }
            }

            return false;
        }
    }
}