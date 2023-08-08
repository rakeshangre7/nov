using Sitecore;
using Sitecore.Data;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Data.Managers;
using Sitecore.Data.Templates;
using Sitecore.Diagnostics;
using Sitecore.Globalization;
using Sitecore.Links;
using Sitecore.Links.UrlBuilders;
using Sitecore.Resources.Media;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using static System.Net.WebRequestMethods;

namespace XmCloudnov.Extensions
{
    public static class ItemExtensions
    {
        #region Constants

        private const string Http = "http";
        private const string Https = "https";

        #endregion

        private static readonly object templateMapLock = new object();
        private static readonly Dictionary<ID, Template> templateMap = new Dictionary<ID, Template>();

        /// <summary>
		/// Determines whether the specified template has a specific base template. 
		/// Consider using the template ID whenever possible
		/// </summary>
		/// <param name="item">The item.</param>
		/// <param name="baseTemplateId">Name of the base template.</param>
		/// <returns>true if it has the base template; otherwise, false. </returns>
		public static bool HasBaseTemplate(this Item item, ID baseTemplateId)
        {
            if (item == null)
            {
                return false;
            }

            var template = item.GetTemplate();

            if (template != null)
            {
                if (template.HasBaseTemplate(baseTemplateId))
                {
                    return true;
                }

                foreach (Template basetemplate in template.GetBaseTemplates())
                {
                    if (basetemplate.ID == baseTemplateId)
                    {
                        return true;
                    }
                }
            }

            return false;
        }

        /// <summary>
		/// Gets the template for the item.
		/// </summary>
		/// <param name="item"></param>
		/// <returns></returns>
		public static Template GetTemplate(this Item item)
        {
            if (!templateMap.ContainsKey(item.TemplateID))
            {
                lock (templateMapLock)
                {
                    if (!templateMap.ContainsKey(item.TemplateID))
                    {
                        templateMap[item.TemplateID] = TemplateManager.GetTemplate(item);
                    }
                }
            }

            return templateMap[item.TemplateID];
        }


        /// <summary>
        /// Returns the aliases for the item.
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public static Item[] GetAliases(this Item item)
        {
            Assert.IsNotNull(item, "item");

            var query = string.Format("/sitecore/system/Aliases//*[@@templateid='{0}' and contains(@Linked item, '{1}')]", TemplateIDs.Alias, item.ID);

            return item.Database.SelectItems(query).ToArray();
        }

        /// <summary>
		/// Returns the url of the item.
		/// </summary>
		/// <param name="item"></param>
		/// <returns></returns>
		public static string GetUrl(this Item item)
        {
            return item.GetUrl(false);
        }

        /// <summary>
		/// Returns the url of the item.
		/// </summary>
		/// <param name="item"></param>
		/// <param name="includeServerUrl"></param>
		/// <returns></returns>
		public static string GetUrl(this Item item, bool includeServerUrl = false)
        {
            var urlOptions = LinkManager.GetDefaultUrlBuilderOptions();
            urlOptions.AlwaysIncludeServerUrl = includeServerUrl;

            return item.GetUrl(urlOptions);
        }

        /// <summary>
		/// Returns the url of the item using the given options.
		/// </summary>
		/// <param name="item"></param>
		/// <param name="urlOptions"></param>
		/// <param name="useAliasIfAvailable"></param>
		/// <returns></returns>
		public static string GetUrl(this Item item, ItemUrlBuilderOptions urlOptions, bool useAliasIfAvailable = false, bool forceHttps = false)
        {
            Assert.IsNotNull(item, "item is null");
            Assert.IsNotNull(urlOptions, "urlOptions is null");

            string itemUrl = null;

            if (useAliasIfAvailable)
            {
                var aliasItem = item.GetAliases().FirstOrDefault();

                if (aliasItem != null)
                {
                    // Load the site URL first
                    var siteUrl = string.Empty;
                    if (urlOptions.Site != null && urlOptions.AlwaysIncludeServerUrl != null && urlOptions.AlwaysIncludeServerUrl.Value)
                    {
                        siteUrl = item.Database.GetItem(string.Concat(urlOptions.Site.RootPath, urlOptions.Site.StartItem)).GetUrl(urlOptions);
                    }

                    // Get the alias
                    var aliasPath = Uri.EscapeUriString(aliasItem.Paths.FullPath.Replace("/sitecore/system/Aliases/", string.Empty));

                    // The full url is the site and alias combined
                    itemUrl = string.Concat(siteUrl, aliasPath);
                }
            }

            // If we have't generated a URL so far generate a standard item url
            if (itemUrl == null)
            {
                // Use default link for the item
                itemUrl = item.GetItemUrl();
                //	Replace(Constants.Sitecore.ItemUrlPrefixRemovalShell, string.Empty);

                itemUrl = itemUrl.Replace(urlOptions.Site.StartPath, string.Empty);
            }

            var isHttpsEnabled = HttpContext.Current != null && HttpContext.Current.Request.IsSecureConnection || forceHttps;

            // Add protocol to the url if a site has been defined and we should include server URL
            if (urlOptions.AlwaysIncludeServerUrl.Value && urlOptions.Site != null && !itemUrl.StartsWith(Http))
            {
                itemUrl = string.Concat(isHttpsEnabled ? Https : Http, itemUrl);
            }
            if (itemUrl.StartsWith(Https) && !isHttpsEnabled)
            {
                itemUrl = Regex.Replace(itemUrl, "^https", Http, RegexOptions.IgnoreCase);
            }
            if (isHttpsEnabled && !itemUrl.StartsWith(Https))
            {
                itemUrl = Regex.Replace(itemUrl, "^http", Https, RegexOptions.IgnoreCase);
            }
            if (urlOptions.AlwaysIncludeServerUrl.Value)
            {
                itemUrl = Regex.Replace(itemUrl, ":(80|443)/", "/");
            }

            if (!urlOptions.AlwaysIncludeServerUrl.Value && (itemUrl.StartsWith(Https) || itemUrl.StartsWith("://")))
            {
                // Since Sitecore has a thing about adding hostname URLs even if not asked to - we'll remove it here if so
                itemUrl = Regex.Replace(itemUrl, "^(https?)?://[^/]+", string.Empty, RegexOptions.IgnoreCase);
            }

            return itemUrl;
        }

        /// <summary>
		/// Determines if either the specified item has a specific field or if the item that
		/// it may refer to has.
		/// Consider using the filed ID whenever possible
		/// </summary>
		/// <param name="item">The item.</param>
		/// <param name="fieldName">The name of the field .</param>
		/// <returns>true if the item or its possible base item has the field; otherwise, false. </returns>
		public static bool HasField(this Item item, string fieldName)
        {
            if (item == null)
            {
                return false;
            }

            var field = item.Fields[fieldName];

            var result = field != null;

            if (!result)
            {
                Log.Debug("HasField returned '" + result + "' " + " make sure that the current item does have a version in the current language. Fieldname: '" + fieldName + "'", typeof(ItemExtensions));
            }

            return result;
        }


        /// <summary>
        /// Determines if either the specified item has a specific field or if the item that
        /// it may refer to has.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <param name="fieldId">The ID of the field .</param>
        /// <returns>true if the item or its possible base item has the field; otherwise, false. </returns>
        public static bool HasField(this Item item, ID fieldId)
        {
            if (item == null)
            {
                return false;
            }

            return item.Fields[fieldId] != null;
        }

        /// <summary>
		/// Gets the field  if either the item or the item that it may refer
		/// to has the field.
		/// </summary>
		/// <param name="item">The current item</param>
		/// <param name="fieldName">Name of the field</param>
		/// <returns>The field value is found</returns>
		public static Field GetField(this Item item, string fieldName)
        {
            Field value = null;
            if (item != null)
            {
                var field = item.Fields[fieldName];

                if (field != null)
                {
                    value = field;
                }
            }

            return value;
        }

        /// <summary>
		/// Returns the field value from a Checkbox field as bool
		/// </summary>
		/// <param name="item"></param>
		/// <param name="fieldId"></param>
		/// <returns></returns>
		public static bool GetFieldAsBool(this Item item, ID fieldId)
        {
            CheckboxField field = item.Fields[fieldId];

            if (field != null)
            {
                return field.Checked;
            }

            return false;
        }

        /// <summary>
		/// Returns the field value from a Checkbox field as bool
		/// </summary>
		/// <param name="item"></param>
		/// <param name="fieldName"></param>
		/// <returns></returns>
		public static bool GetFieldAsBool(this Item item, string fieldName)
        {
            if (!item.HasField(fieldName))
            {
                return false;
            }

            var field = item.Fields[fieldName];
            return item.GetFieldAsBool(field.ID);
        }

        /// <summary>
		/// Returns the field value from a Single Text field as string
		/// </summary>
		/// <param name="item"></param>
		/// <param name="fieldId"></param>
		/// <returns></returns>
		public static string GetFieldAsString(this Item item, ID fieldId)
        {
            if (item.HasField(fieldId))
            {
                return item.Fields[fieldId].Value;
            }

            return string.Empty;
        }

        public static string GetFieldAsString(this Item item, string fieldName)
        {
            var field = item.GetField(fieldName);

            if (field == null)
            {
                return string.Empty;
            }

            return item.GetFieldAsString(field.ID);
        }

        /// <summary>
        /// Returns the field valud from a Single Text in the specified language field as a String
        /// </summary>
        /// <param name="item"></param>
        /// <param name="fieldId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        public static string GetFieldAsString(this Item item, ID fieldId, Language language)
        {
            if (item.HasField(fieldId))
            {
                Item itemInLanguage = item.Database.GetItem(item.ID, language);

                if (itemInLanguage != null && itemInLanguage.Version != null)
                {
                    return itemInLanguage.Fields[fieldId].Value;
                }

            }

            return string.Empty;
        }

        public static string GetFieldLinkUrl(this Item item, string fieldName)
        {
            string linkTarget;

            return item.GetFieldLinkUrl(item.Fields[fieldName].ID, out linkTarget);
        }

        public static string GetFieldLinkUrl(this Item item, ID field)
        {
            string linkTarget;

            return item.GetFieldLinkUrl(field, out linkTarget);
        }

        public static string GetFieldLinkUrl(this Item item, ID field, out string linkTarget)
        {
            var result = string.Empty;

            LinkField linkField = item.Fields[field];

            if (item[field].Length == 0)
            {
                result = string.Empty;
            }
            else if (linkField == null)
            {
                result = string.Empty;
            }
            else if (linkField.IsMediaLink && linkField.TargetItem != null)
            {
                result = MediaManager.GetMediaUrl(linkField.TargetItem);
            }
            else if (linkField.IsInternal && linkField.TargetItem != null)
            {
                result = LinkManager.GetItemUrl(linkField.TargetItem);
            }
            else if (!String.IsNullOrEmpty(linkField.Url))
            {
                result = linkField.Url;
            }

            linkTarget = (linkField == null) ? string.Empty : linkField.Target;

            return result;
        }
    }
}