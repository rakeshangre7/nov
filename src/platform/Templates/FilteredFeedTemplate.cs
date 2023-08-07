using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace XmCloudnov.Templates
{

    public static class Template
    {
        public static readonly ID FilteredFeedTemplateId = new ID("f96f5c5e-9e6f-4ee1-90c6-70a25f724cb7");
        public const string ArticlePageTemplateIdString = "{34b41a4a-a8b5-432c-8a07-b6ca70ada9da}";
        public const string EventDetailsPageTemplateIdString = "{1bf45569-a9ee-482e-8c1f-6aed83c3c8ab}";
        public const string NewsPageTemplateIdString = "{93e4c55d-9fa4-4945-a03a-1565852b0a90}";
        public const string EmployeeStoryPageTemplateIdString = "{d845df6c-dbff-4280-acdd-cc97d29844a8}";
        public const string BusinessUnitPageTemplateIdString = "{fa173e9d-ff30-4ddf-93b9-7e6d647c30ae}";
        public const string BusinessSegmentFolderTemplateIdString = "{f5d34297-7acd-42b2-b6e9-bc71d7e7f57a}";
        public const string BusinessSegmentTemplateIdString = "{6cd7163e-c56a-466d-addb-6087e5158ebc}";
        public const string BusinessUnitTemplateIdString = "{42b89a58-67c0-454d-8774-0c34e46f5d9d}";
        public const string FieldDictionaryTemplateIdString = "{92e7192a-95b0-4bd0-8370-a87aed9a25c8}";

    }

    public static class FilteredFeedFields
    {
        public static readonly ID SourceLocationFieldId = new ID("75c2ac2f-7a24-4f7a-81db-9eed36925f36");
        public static readonly ID LearnMoreTextFieldId = new ID("93499c7b-da90-4c4f-9d7f-26324aaad89e");
        public static readonly ID FieldsFilterSourceFieldId = new ID("386427a9-5fa3-4590-b1f9-663db8146c21");
        public static readonly ID SortOrderFieldId = new ID("f88ca97c-8bbb-4012-b42d-9d04c31ba823");
        public static readonly ID SortByFieldId = new ID("7a7ed74a-154b-4c3a-b8cf-deb48cd5913d");
        public static readonly ID InitialItemCountFieldId = new ID("2309835a-4a1e-4d72-ad50-a2386d026443");
        public static readonly ID LoadMoreItemsCountFieldId = new ID("d5da8994-7cab-4bc2-8feb-43f8402c5e8d");
        public static readonly ID MaxNumberOfItemsFieldId = new ID("1055e71c-db1c-4851-851c-eb6f3e46afb3");
        public static readonly ID LoadMoreTextFieldId = new ID("fbbbc862-f1c0-4f81-89b4-2ca6549fc246");
        public static readonly ID FilterByTextFieldId = new ID("90db8228-6c8b-4678-809c-1c6a6e083d8f");
        public static readonly ID ResetFilterTextFieldId = new ID("d0318cf7-e513-476d-955a-ea54d12cdee2");
        public static readonly ID PageTemplateFieldId = new ID("816f832b-f2b7-40a5-bfca-b144532580db");

    }

    public static class FieldDictionary
    {
        public static readonly ID FieldNameFieldId = new ID("8c9047b6-4611-4f3b-b6b5-704bc9e9349f");
        public static readonly ID FieldValueFieldId = new ID("83a18206-294a-45f6-9925-71677eb9f4fb");
    }

    public static class PageFields
    {
        public static readonly ID ContentTagFieldId = new ID("a1343418-5a51-40de-9488-0efaa22e2042");
        public static readonly ID HeadlineFieldId = new ID("230a15ec-92fd-4a68-954b-9689bcba0862");
        public static readonly ID SubheadingFieldId = new ID("21d62cf8-1209-47b9-a117-2bb93b891dad");
        public static readonly ID CardImageFieldId = new ID("d4ec7ae2-6d57-4ae3-b582-4af2544a7132");
        public static readonly ID EndDateFieldId = new ID("8f4016b6-4a51-4621-90cb-77774279dba3");
        public static readonly ID StartDateFieldId = new ID("6f84eee0-ddfa-478a-b9fb-8a7adc34ed42");
        public static readonly ID CityFieldId = new ID("81beeffb-e4e6-44ad-aa32-b3380b8d3fcd");
        public static readonly ID CountryFieldId = new ID("bba7d4dd-7d1e-428e-b80d-055170466dc3");
        public static readonly ID NewsPageDateFieldId = new ID("b0d622b7-156a-4f17-9ce4-4dd213df0302");
        public static readonly ID PageTitleFieldId = new ID("5175483b-161a-4999-9f30-34be82e2d85b");
        public static readonly ID JobFunctionFieldId = new ID("59d8c695-4c77-4e28-aca2-18e95ced59be");
        public static readonly ID JobTitleFieldId = new ID("8481aefe-5414-437b-bf8b-6d95d2dc9fc8");
        public static readonly ID JobLocationFieldId = new ID("8d7bd282-7922-440b-bf50-8260e886c806");
        public static readonly ID ExperienceFieldId = new ID("552d2f72-38dc-4292-a4d4-c25d7659a547");
        public static readonly ID BusinessUnitFieldId = new ID("74fdb488-ff1a-4883-9379-e5f95b2f3afe");
        public static readonly ID BusinessSegmentNameFieldId = new ID("0807d0a6-04d1-4072-9093-68cb81246950");
        public static readonly ID BusinessUnitsFieldId = new ID("8ece14d8-09aa-4dc7-a693-056e3123e529");
        public static readonly ID BusinessUnitNameFieldId = new ID("fd73a0aa-9735-498a-a0ac-548a27f79d61");
    }

}