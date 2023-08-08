using Sitecore.Data;
using Sitecore.Data.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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

        public string PageImage
        {
            get;
            set;
        }

        public string CardImage
        {
            get;
            set;
        }

        public string CardImageAlt
        {
            get;
            set;
        }

        public string ColorCode
        {
            get;
            set;
        }

        public string CssClass
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

        public string Url
        {
            get;
            set;
        }

        public string Headline
        {
            get;
            set;
        }

        public string Abstract
        {
            get;
            set;
        }

        public string MenuTitle
        {
            get;
            set;
        }

        public string MobileMenuTitle
        {
            get;
            set;
        }

        public string SubMenuText
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

        public string Target
        {
            get;
            set;
        }

        public string FeaturedStoryHeadline
        {
            get;
            set;
        }

        public string FeaturedStoryAbstract
        {
            get;
            set;
        }

        public string FeaturedStoryCTALink
        {
            get;
            set;
        }

        public string FeaturedStoryCTALinkTarget
        {
            get;
            set;
        }

        public string FeaturedStoryCTAText
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