using Sitecore.Data;
using Sitecore.Data.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XmCloudnov.Helpers;

namespace XmCloudnov.Models
{
    public class NavigationEntryModel
    {
        private readonly List<NavigationEntryModel> subPages = new List<NavigationEntryModel>();

        public List<NavigationEntryModel> SubPages
        {
            get
            {
                return subPages;
            }
        }

        //public IEnumerable<NavigationEntryModel> VisibleSubPages
        //{
        //    get
        //    {
        //        return SubPages.Where(entry => !entry.HideInNavigation);
        //    }
        //}

        //public IEnumerable<NavigationEntryModel> VisibleFooterSubPages
        //{
        //    get
        //    {
        //        return SubPages.Where(entry => !entry.HideInNavigation && !entry.HideInFooterNavigation);
        //    }
        //}

        //public List<IGrouping<int, NavigationEntryModel>> SubEntriesGrouped
        //{
        //    get
        //    {
        //        return subPages.GroupBy(row => subPages.IndexOf(row) % 2).ToList();
        //    }
        //}

        public NOVImage PageImage
        {
            get;
            set;
        }

        public NOVImage CardImage
        {
            get;
            set;
        }

        public StringField CardImageAlt
        {
            get;
            set;
        }

        public StringField ColorCode
        {
            get;
            set;
        }

        public StringField CssClass
        {
            get;
            set;
        }

        public Item FeaturedItem
        {
            get;
            set;
        }

        public ID TemplateId
        {
            get;
            set;
        }

        public ID ItemId
        {
            get;
            set;
        }

        public NOVLink Url
        {
            get;
            set;
        }

        public StringField Headline
        {
            get;
            set;
        }

        public StringField Abstract
        {
            get;
            set;
        }

        public StringField MenuTitle
        {
            get;
            set;
        }

        public StringField MobileMenuTitle
        {
            get;
            set;
        }

        public StringField SubMenuText
        {
            get;
            set;
        }

        public bool IsActive
        {
            get;
            set;
        }

        public bool LinkToFirstChild
        {
            get;
            set;
        }

        public bool HideInNavigation
        {
            get;
            set;
        }

        public bool HideInFooterNavigation
        {
            get;
            set;
        }

        public bool HideSubNavigation
        {
            get;
            set;
        }

        public StringField Target
        {
            get;
            set;
        }

        public StringField FeaturedStoryHeadline
        {
            get;
            set;
        }

        public StringField FeaturedStoryAbstract
        {
            get;
            set;
        }

        public NOVLink FeaturedStoryCTALink
        {
            get;
            set;
        }

        public StringField FeaturedStoryCTALinkTarget
        {
            get;
            set;
        }

        public StringField FeaturedStoryCTAText
        {
            get;
            set;
        }

        public bool HasSubPages
        {
            get
            {
                return SubPages.Count > 0 && !HideSubNavigation;
            }
        }

        //public bool HasMobileSubPages
        //{
        //    get
        //    {
        //        return VisibleSubPages.Any();
        //    }
        //}
    }
}