using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace XmCloudnov.Constants
{
    public static class NovSitecoreConstants
    {
        public const string LinkTargetSelf = "_self";
        public static string ContentPathPrefix = "/sitecore/content";
        public static string ModulesFolderRelativePath = "/Modules";
        public static string ModulesProductsFolderPath = "/sitecore/content/NOV Com/Modules/Products";
        public static string SystemFolderRelativePath = "/System";
        public static string HomePageRelativePath = "/Home";
        public static string BusinessSegmentsFolderPath = "/sitecore/content/NOV Com/System/Business Segments Folder";
        public static string BusinessUnitsFolderPath = "/sitecore/content/NOV Com/System/Business Units Folder";
        public static string NewProductFormFilePath = "/sitecore modules/shell/NewProductForm.aspx";
        public const string LinkTypeInternal = "internal";
        public const string ErrorJsonResponse = "error";
        public const string LinkTargetBlank = "_blank";
        public const string BRTag = "<br/>";
        //public const string PageTypeBrand = "brand";
        //public const string PageTypeCapability = "capability";
        //public const string PageTypeBusinessUnit = "unit";
        public const string ContentTagStandard = "Standard";
        public const int NumberOfProductSuggestions = 6;

        public static class FieldIds
        {
            public static readonly ID ParametersTemplate = ID.Parse("{13F89250-AD6B-4548-882E-118A12C18094}");
            public static readonly ID PageEditorButtons = ID.Parse("{A2F5D9DF-8CBA-4A1D-99EB-51ACB94CB057}");
            public static readonly ID BusinessSegments = ID.Parse("{646DE4D6-B128-4A3E-8C68-F789869A811B}");
            public static readonly ID BusinessUnits = ID.Parse("{01FD8C23-1B98-4E4B-9F2D-ECF3EB8AAD68}");
        }

        public static class FieldNames
        {
            public static class Marketing
            {
                public const string ProfileCardValue = "Profile Card Value";
            }
        }

        public static class VisitorTypes
        {
            public const string VisitorTypeSessionKey = "VisitorTypeValue";
            public const string NOVComAudience = "NOVCom Audience";
            public const string NOVComBusinessSegments = "NOVCom Business Segments";
            public const string NOVComBusinessUnits = "NOVCom Business Units";
            public const string NOVComCapabilities = "NOVCom Capabilities";
        }

        public static class PageTemplateIds
        {
            public static readonly ID ArticleStory = ID.Parse("{34B41A4A-A8B5-432C-8A07-B6CA70ADA9DA}");
            public static readonly ID BrandCapabilityOverview = ID.Parse("{CED78EFE-1F24-4E4F-95F1-FFBEFBC22DB9}");
            public static readonly ID Brand = ID.Parse("{767FEF1E-1EB7-417D-93C6-CA72CAC21A26}");
            public static readonly ID BusinessSegment = ID.Parse("{9C2677BB-7840-4E59-AC44-4C5D4DFF7610}");
            public static readonly ID BusinessUnit = ID.Parse("{FA173E9D-FF30-4DDF-93B9-7E6D647C30AE}");
            public static readonly ID Capability = ID.Parse("{6AD6B0C9-8586-4263-8FFB-9CBFC20B67D4}");
            public static readonly ID CardList = ID.Parse("{800EF4CB-3273-4756-AD58-FD9B119E02BF}");
            public static readonly ID Contact = ID.Parse("{9D197B20-1ACF-4C40-9AEC-A6AC1879DC26}");
            public static readonly ID Content = ID.Parse("{559ADBC8-D9CA-436B-BA12-4019404BBE11}");
            public static readonly ID EmployeeStory = ID.Parse("{D845DF6C-DBFF-4280-ACDD-CC97D29844A8}");
            public static readonly ID EventDetails = ID.Parse("{1BF45569-A9EE-482E-8C1F-6AED83C3C8AB}");
            public static readonly ID History = ID.Parse("{1B5D00BB-470B-48E5-A93F-C025446F3732}");
            public static readonly ID Library = ID.Parse("{B1779D4B-ACE8-4B2D-9A65-B45F23A11A63}");
            public static readonly ID Overview = ID.Parse("{1D0EE984-9527-4CDE-AE7D-CD084F4E70E2}");
            public static readonly ID PodcastFeed = ID.Parse("{2FF882B0-4F69-4F0D-9D30-C3B5396F0E5B}");
            public static readonly ID Product = ID.Parse("{E04D0D00-C0F7-41A6-917B-AF108BB097E1}");
            public static readonly ID Service = ID.Parse("{E88B8164-BCB1-4CCF-9768-D3189DACA81C}");
            public static readonly ID Standard = ID.Parse("{D227AB0E-FD44-4AE0-878A-189949913D0B}");
            public static readonly ID Home = ID.Parse("{89767E68-D253-4D4D-BD77-7D385DC947BC}");
            public static readonly ID News = ID.Parse("{93E4C55D-9FA4-4945-A03A-1565852B0A90}");
            public static readonly ID RedirectPage = ID.Parse("{DBC23D7D-62BD-46A5-B584-58B43C5DFAAD}");
        }

        public static class PageTemplateShortDescriptions
        {
            public static readonly string ContentPage = "Content";
            public static readonly string ArticlePage = "Article";
            public static readonly string NewsPage = "News";
            public static readonly string BrandCapabilityOverviewPage = "Brand/Capability Overview";
            public static readonly string BrandPage = "Brand";
            public static readonly string BusinessSegmentPage = "Business Segment";
            public static readonly string BusinessUnitPage = "Business Unit";
            public static readonly string CapabilityPage = "Capability";
            public static readonly string CardListPage = "Card List";
            public static readonly string ContactPage = "Contact";
            public static readonly string EmployeeStoryPage = "Employee";
            public static readonly string EventDetailsPage = "Event";
            public static readonly string HistoryPage = "History";
            public static readonly string OverviewPage = "Overview";
            public static readonly string PodcastFeedPage = "Podcast";
            public static readonly string ProductPage = "Product";
            public static readonly string ServicePage = "Service";
            public static readonly string StandardPage = "Standard";
            public static readonly string LibraryPage = "Library";
            public static readonly string ExternalPage = "External Page";
        }

        public static class RenderingIDs
        {
            public static readonly ID BrandCapabilityFilteredList = ID.Parse("{0AA85F9E-DF36-4EF9-882D-6542766BF7D4}");
            public static readonly ID BrandCapabilityList = ID.Parse("{88C2CC12-F008-40D3-97CE-A9D1C7CE929D}");
            public static readonly ID ProductHeroSlider = ID.Parse("{C3DD97A2-2C6B-4FDA-922C-7127AE10C976}");
            public static readonly ID HeroSlider = ID.Parse("{AB213187-9551-4F9B-AE3D-261BB2B2434F}");
            public static readonly ID SearchResult = ID.Parse("{639E8A97-3CB0-427A-886C-47EA52AC2839}");
        }

        public static class InternalLinkValidation
        {
            public const string Name = "Internal Link Selection Validator";
            public const string ErrorText = "You may only select an internal link for this field";
            public const string MediaLibraryPrefix = "/sitecore/media library/";
        }

        public static class ContentPageValidation
        {
            public const string Name = "Content Page Selection Validator";
            public const string ErrorText = "You may only select a Content Page for this field";
        }

        public static class EmployeeProfilePageValidation
        {
            public const string Name = "Employee Page Selection Validator";
            public const string ErrorText = "You may only select an Employee Profile Page for this field";
        }

        public static class ArticlePageValidation
        {
            public const string Name = "Article Page Selection Validator";
            public const string ErrorText = "You may only select an Article Page for this field";
        }

        public static class AssetSelectionValidation
        {
            public const string Name = "Asset Selection Validator";
            public const string ErrorText = "You may only select an Asset type for this field";
        }

        public static class NewsPageValidation
        {
            public const string Name = "News Page Selection Validator";
            public const string ErrorText = "You may only select an Article Page of type News for this field";
        }

        public static class EventPageValidation
        {
            public const string Name = "Event Page Selection Validator";
            public const string ErrorText = "You may only select an Event Page for this field";
        }

        public static class ProductServicePageValidation
        {
            public const string Name = "Product Service Selection Validator";
            public const string ErrorText = "You may only select an Article Page of type Product/Service for this field";
        }

        public static class ContentListValidation
        {
            public const string MissingCardImage = "No card image on target page. This is required for the card to be rendered";
        }

        public static class TemplateIds
        {
            public static readonly ID MediaFolder = ID.Parse("{FE5DD826-48C6-436D-B87A-7C4210C7413B}");
        }

        public static class ItemIds
        {
            public static readonly ID SearchPage = ID.Parse("{BB4B9274-D5FD-4116-A440-D0771FF1AFDA}");
            public static readonly ID SearchCategories = ID.Parse("{6A11FCB6-B59B-4087-8BA9-98D821E64C9C}");
            public static readonly ID SearchKeywordsBucket = ID.Parse("{FD4A8A4F-34ED-49A8-86FA-3492E84CE64A}");
            public static readonly ID CategoriesFolder = ID.Parse("{8996FF83-4199-4547-8BEA-846BA0BB6F68}");
            public static readonly ID BusinessSegmentsFolder = ID.Parse("{E79ABF5D-5DB9-4B4F-A44F-5B5415D2CD82}");
            public static readonly ID EloquaFormsFodler = ID.Parse("{B9C1D74C-840C-415C-BD53-69F169EC13AF}");
            public static readonly ID ProductsBucket = ID.Parse("{BDB76C91-CE7F-4DCD-B849-2762C574A13A}");
            public static readonly ID AssetTypesFolder = ID.Parse("{5816E856-8125-4FE1-82FB-50D2F9FAA7C5}");
            public static readonly ID NOVContentFolder = ID.Parse("{569AFDF0-3638-43A2-8A58-C569799C1BF7}");

            /// <summary>
            /// core:/sitecore/content/Applications/WebEdit/Custom Experience Buttons/NOV Shared/Asset Item Editor
            /// </summary>
            public static readonly ID AssetItemEditorCustomExperienceButton = ID.Parse("{68B8FE04-DE78-426B-9D95-70C8C30A26F0}");
        }

        public enum ContentTags
        {
            Article,
            News,
            Employee,
            Event,
            Product,
            BusinessUnit
        }

        public static readonly Dictionary<string, List<ID>> FilteredFeedPageTypeMappings = new Dictionary<string, List<ID>>()
        {
            {"standard", new List<ID> {PageTemplateIds.BusinessSegment, PageTemplateIds.Brand, PageTemplateIds.BrandCapabilityOverview, PageTemplateIds.Capability, PageTemplateIds.CardList, PageTemplateIds.Contact, PageTemplateIds.History,
                PageTemplateIds.Library, PageTemplateIds.Overview, PageTemplateIds.PodcastFeed, PageTemplateIds.Product, PageTemplateIds.Service, PageTemplateIds.Standard}},
            {"article", new List<ID> {PageTemplateIds.ArticleStory}},
            {"employee profile", new List<ID> {PageTemplateIds.EmployeeStory}},
            {"news", new List<ID> {PageTemplateIds.News}},
            {"event", new List<ID> {PageTemplateIds.EventDetails}},
            {"business unit", new List<ID> {PageTemplateIds.BusinessUnit}}
        };

        public static readonly Dictionary<string, List<string>> FilteredFeedPageTypeFilterMappings = new Dictionary<string, List<string>>()
        {
            {"article", new List<string> {ContentTeaserCards.FilterTypes.ArticleType, ContentTeaserCards.FilterTypes.BusinessSegment, ContentTeaserCards.FilterTypes.When}},
            {"employee profile", new List<string> { ContentTeaserCards.FilterTypes.Country, ContentTeaserCards.FilterTypes.Experience, ContentTeaserCards.FilterTypes.JobFunction}},
            {"news", new List<string> {ContentTeaserCards.FilterTypes.BusinessSegment, ContentTeaserCards.FilterTypes.When}},
            {"event", new List<string> {ContentTeaserCards.FilterTypes.BusinessSegment, ContentTeaserCards.FilterTypes.When, ContentTeaserCards.FilterTypes.Country}},
            {"business unit", new List<string> {ContentTeaserCards.FilterTypes.BusinessSegment}}
        };

        public static class ContentTeaserCards
        {
            public static class CardTypes
            {
                public static readonly string Standard = "Standard";
                public static readonly string Employee = "Employee";
                public static readonly string Article = "Article";
                public static readonly string News = "News";
                public static readonly string Event = "Event";
                public static readonly string ProductService = "ProductService";
                public static readonly string BusinessUnit = "BusinessUnit";
            }

            public static class DateFormats
            {
                public static readonly string DateFormat = "MM/dd/yyyy";
                public static readonly string MonthFormat = "MMMMM";
                public static readonly string ContentCardDateFormat = "MMM dd, yyyy";
            }

            public static class SortOrder
            {
                public const string Ascending = "asc";
                public const string Descending = "desc";
                public const string Random = "random";
            }

            public static class SortBy
            {
                public const string Headline = "headline";
                public const string Date = "date";
            }

            public static class FilterTypes
            {
                public const string ArticleType = "articletype";
                public const string BusinessSegment = "segment";
                public const string Country = "country";
                public const string Experience = "experience";
                public const string JobFunction = "jobfunction";
                public const string When = "when";
            }

            public static class FilterLabels
            {
                public const string ArticleType = "Article Type";
                public const string BusinessSegment = "Segment";
                public const string Country = "Country";
                public const string Experience = "Experience";
                public const string JobFunction = "Job Function";
                public const string When = "When";
            }

            public static class FilterFields
            {
                public const string ArticleType = "ContentTag";
                public const string BusinessSegments = "BusinessSegments";
                public const string Country = "Country";
                public const string Experience = "Experience";
                public const string JobFunction = "JobFunction";
                public const string When = "PublishedDate";
            }

            public static class AnyFilterValueLabels
            {
                public const string ArticleType = "All Stories";
                public const string BusinessSegment = "All Segments";
                public const string Country = "All Countries";
                public const string Experience = "Any Experience";
                public const string JobFunction = "All Job Functions";
                public const string When = "Any Published Date";
            }

            public static class ProductMetadataConstants
            {
                public const string Model = "Model";
                public const string Brand = "Brand";
                public const string Application = "Application";
            }

            public static readonly string Separator = "&nbsp;&nbsp;•&nbsp;&nbsp;";

            public static readonly string FilterSeparator = "---";

            public static readonly string CardDescriptionEllipsis = "…";
        }

        public static class ContentPageTypes
        {
            public static readonly string Article = "Article";
            public static readonly string News = "News";
            public static readonly string EventDetails = "Event";
            public static readonly string EmployeeStory = "Employee Story";
        }

        public static class Errors
        {
            public const string ContentTeaserCardsError = "There was an error fetching the filetered feed";
            public const string PodcastFeedError = "There was an error fetching the podcast feed";
            public const string ContentListError = "There was an error fetching the content list";
            public const string ProductsServicesError = "There was an error fetching the products/services list";
        }

        public static class Search
        {
            public const string CategoryFacet = "category";
            public const string CategoryIdFacet = "categoryid";
            public const string CategoriesFacet = "fullcategoryidlist";
            public const string BrandsFacet = "brands";
            public const string CapabilitiesFacet = "capabilities";
            public const string BusinessSegmentAndUnitFacet = "business_segment_and_unit";
        }

        public static class SearchSuggestionTypes
        {
            public const string Page = "link";
            public const string Keyword = "search";
            public const string Media = "download";
        }

        public static class QueryStrings
        {
            public const string Download = "download";

            public const string Form = "form";

            public const string FirstName = "firstname";

            public const string TemplateFilter = "t";
            public const string Page = "p";
            public const string BusinessSegment = "segment";

            public static class Maps
            {
                public const string SearchTerm = "searchTerm";
                public const string Locations = "locations";
                public const string Facilities = "facilityFilter";
                public const string DisabledControls = "disableControls";
                public const string Segment = "businessSegment";
            }
        }

        public static class Cookies
        {
            public const string DisableNonEssentialCookies = "DisableNonEssentialCookies";
            public const string GoogleAnalytics = "_ga";
            public const string GoogleTagManager = "_gid";
            public const string GoogleAnalyticsFlag = "_gat";
            public const string SitecoreAnalytics = "SC_ANALYTICS_GLOBAL_COOKIE";
            public const string AzureDomain = "azurewebsites.net";
        }

        public static class DocumentList
        {
            public const string DocumentSelectionsSessionKey = "DocumentsController_SelectedDocuments";
        }

        public static class BrandCapability
        {
            public const string TypeBrand = "brand";
            public const string TypeCapability = "capability";
        }

        public static class ProductsServicesBucket
        {
            public const string BucketPath = "/sitecore/content/NOV Com/Products";
            public const string ProductsServicesCustomUrlPrefix = "/products/";
            public const string BucketPathPrefix = "/sitecore/content/NOV Com/";
        }

        public static class HeroSlider
        {
            public const string StaticHeroText = "Static Hero Text:";
        }

        public static class Menu
        {
            public const string ExitMenu = "Exit Menu";
        }

        public static class ExperienceEditorMessages
        {
            public const string PreviewModeModule = "This module is not visible within the Experience Editor. Please use preview mode to view this module";
            public const string FilteredFeedSourceLocationNotSet = "Please select a source item location/page types for the feed";
            public const string EloquaForm = "Eloqua Form is not visible in Experience Editor";
            public const string SearchResults = "Search results not displayed in experience editor mode";
        }

        public static class Cache
        {
            public const string AssetsSearchResultsCache = "AssetSearchResultsCached";
        }

        public static class ProductHeroSlider
        {
            public static class DisplayModes
            {
                public const string FullSize = "full size";
                public const string ProductImage = "product image";
                public const string TextOnly = "text only";
            }
        }
    }
}