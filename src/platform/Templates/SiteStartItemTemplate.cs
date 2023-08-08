using Sitecore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace XmCloudnov.Templates
{
    public static class HomeRootFields
    {

        public static readonly ID LabelReadMoreFieldId = new ID("4d685e2c-5975-40e3-8ebe-4fdc03ad58fb");
        public static readonly ID CardImageFieldId = new ID("d4ec7ae2-6d57-4ae3-b582-4af2544a7132");
        public static readonly ID PortalHeaderFieldId = new ID("6c101b20-4030-47ac-9a4c-a01fa245c5f6");
        public static readonly ID PortalDescriptionFieldId = new ID("cdc2a2c3-3bd7-4aee-8ad1-64924e7b2ec4");
        public static readonly ID PortalRegisterUrlFieldId = new ID("91c80ddf-4b81-4136-96ab-d18f869b69ee");
        public static readonly ID NOVPortalLoginFieldId = new ID("2224ad71-4e19-4b53-b797-e2dd69d2592d");
        public static readonly ID LabelViewAllFieldId = new ID("39e6935d-f14d-44a9-9d24-d8a0d653b93a");
        public static readonly ID FeaturedStorySubItemLinkFieldId = new ID("851d1dab-ab7e-4b4e-829f-2af8f827766d");
        public static readonly ID PositionFieldId = new ID("45eaecaf-4be0-48ee-afd3-7105583b4ae7");
        public static readonly ID LocationFieldId = new ID("548528d3-0b53-439e-8725-cee70073ce46");
        public static readonly ID ExperienceFieldId = new ID("552d2f72-38dc-4292-a4d4-c25d7659a547");
        public static readonly ID SiteLogoImageFieldId = new ID("{CD90B628-A46E-4E03-929E-C7155F7961C5}");
        public static readonly ID MenuLabelFieldId = new ID("d735d2c2-b327-4ded-bd40-86ad1d72a9bc");

    }

    public static class StandardContentFields
    {
        public static readonly ID PageTitleFieldId = new ID("5175483b-161a-4999-9f30-34be82e2d85b");
        public static readonly ID HeadlineFieldId = new ID("230a15ec-92fd-4a68-954b-9689bcba0862");
    }

    public static class ContentPageFields
    {
        public static readonly ID CardImageFieldId = new ID("d4ec7ae2-6d57-4ae3-b582-4af2544a7132");
    }

    public static class FeaturedStoryFields
    {
        public static readonly ID FeaturedStoryHeadlineFieldId = new ID("1e6decbd-039c-43cc-b439-0a198f868334");
        public static readonly ID FeaturedStoryAbstractFieldId = new ID("7c2c7685-a8a6-4130-86ae-102efa679725");
        public static readonly ID FeaturedStoryCTATextFieldId = new ID("a94e898f-4fbb-4421-88e5-7ee3181a08e4");
        public static readonly ID FeaturedStorySubItemLinkFieldId = new ID("851d1dab-ab7e-4b4e-829f-2af8f827766d");

    }

    public static class ShowInCategoryMenuFields
    {
        public static readonly ID ShowInMenuFieldId = new ID("172ffe82-8e14-4f19-a824-b0781349276c");
    }

    public static class MenuFields
    {
        public static readonly ID MenuTitleFieldId = new ID("6d59e31a-53a8-41a5-9e9f-31362a416be7");
        public static readonly ID HideInNavigationFieldId = new ID("351936cd-20a5-40f7-8175-c4d224afadab");
        public static readonly ID HideSecondaryNavigationFieldId = new ID("20bea456-514e-4310-b4ef-0a14480840c1");
        public static readonly ID SubmenuTextFieldId = new ID("e751f1ed-0db0-463a-ac3e-57c8ca267f71");
        public static readonly ID MobileMenuTitleFieldId = new ID("3a81e0b8-4742-4d96-be89-8c1f3716c285");
        public static readonly ID HideInFooterNavigationFieldId = new ID("d3c5ed7b-3756-4e8f-b2df-d1c79758a255");
        
    }

    public static class Templates
    {
        public const string ContentPageTemplateID = "559adbc8-d9ca-436b-ba12-4019404bbe11";
        public const string BrandCapabilityOverviewPageTemplateID = "ced78efe-1f24-4e4f-95f1-ffbefbc22db9";
    }


}