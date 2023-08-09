using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Helpers;

namespace XmCloudnov.Models
{
    public class NavigationModel
    {
        public StringField SiteFeaturedHeadline
        {
            get; set;
        }
        public NOVImage SiteLogo
        {
            get; set;
        }
        public StringField MenuLabel
        {
            get; set;
        }
        public StringField SiteFeaturedAbstract
        {
            get; set;
        }
        public NOVLink SiteFeaturedCtaLink
        {
            get; set;
        }

        //public StringField SiteFeaturedCtaLinkTarget
        //{
        //    get; set;
        //}
        public StringField SiteFeaturedCtatext
        {
            get; set;
        }
        public StringField LearnMoreText
        {
            get; set;
        }
        public StringField PortalHeader
        {
            get; set;
        }
        public StringField PortalDescription
        {
            get; set;
        }
        public NOVLink PortalRegisterUrl
        {
            get; set;
        }
        public StringField PortalRegisterUrlText
        {
            get; set;
        }
        public NOVLink PortalLoginUrl
        {
            get; set;
        }
        public StringField PortalLoginText
        {
            get; set;
        }
        public StringField ViewAllText
        {
            get; set;
        }
        public NOVImage CardImage
        {
            get; set;
        }
        public StringField CardImageAlt
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