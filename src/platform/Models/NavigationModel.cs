using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Helpers;

namespace XmCloudnov.Models
{
    public class NavigationModel
    {
        public string SiteFeaturedHeadline
        {
            get; set;
        }
        public NOVImage SiteLogo
        {
            get; set;
        }
        public string MenuLabel
        {
            get; set;
        }
        public string SiteFeaturedAbstract
        {
            get; set;
        }
        public string SiteFeaturedCtaLink
        {
            get; set;
        }

        public string SiteFeaturedCtaLinkTarget
        {
            get; set;
        }
        public string SiteFeaturedCtatext
        {
            get; set;
        }
        public string LearnMoreText
        {
            get; set;
        }
        public string PortalHeader
        {
            get; set;
        }
        public string PortalDescription
        {
            get; set;
        }
        public string PortalRegisterUrl
        {
            get; set;
        }
        public string PortalRegisterUrlText
        {
            get; set;
        }
        public string PortalLoginUrl
        {
            get; set;
        }
        public string PortalLoginText
        {
            get; set;
        }
        public string ViewAllText
        {
            get; set;
        }
        public NOVImage CardImage
        {
            get; set;
        }
        public string CardImageAlt
        {
            get; set;
        }

        private readonly List<NavigationEntryModel> navigationEntries = new List<NavigationEntryModel>();

        public List<NavigationEntryModel> NavigationEntries
        {
            get
            {
                return navigationEntries;
            }
        }

        //public IEnumerable<NavigationEntryModel> VisibleNavigationEntries
        //{
        //    get
        //    {
        //        return NavigationEntries.Where(entry => !entry.HideInNavigation);
        //    }
        //}

        //public IEnumerable<NavigationEntryModel> VisibleFooterNavigationEntries
        //{
        //    get
        //    {
        //        return NavigationEntries.Where(entry => !entry.HideInNavigation && !entry.HideInFooterNavigation);
        //    }
        //}
    }
}