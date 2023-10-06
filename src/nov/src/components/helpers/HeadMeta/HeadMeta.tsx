import { Field, getPublicUrl, LayoutServiceData } from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface MetaDataProps {
  prefix: string;
  pageDescription: {
    value: string;
  };
  pageTitle: {
    value: string;
  };
  metaKeywords: {
    value: string;
  };
  metaTitle: {
    value: string;
  };
  metaDescription: {
    value: string;
  };
  SiteName: string;
  canonicalUrl: Field<string>;
  openGraphTitle: Field<string>;
  OpenGraphImageMediaUrl: Field<string>;
  openGraphType: Field<string>;
  Description: Field<string>;
  menifest: Field<string>;
  icon: Field<string>;
  domain: Field<string>;
  locale: Field<string>;
  openGraphUrl: Field<string>;
  businessSegments: Field<string>;
  businessUnits: Field<string>;
  brand: {
    fields: {
      brandName: Field<string>;
    };
  };
  capability: {
    fields: {
      capabilityName: Field<string>;
    };
  };
  categories: {
    map(
      arg0: (category: {
        fields: { categoryName: { value: { toString: () => string } } };
      }) => string
    ): unknown;
    fields: {
      categoryName: Field<string>;
    };
  };
}

const HeadMeta = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const { context } = layoutData.sitecore;
  const publicUrl = getPublicUrl();
  const PageMetaData = route?.fields as unknown as MetaDataProps;

  if (!PageMetaData) {
    return <></>;
  }

  const pageTitle = PageMetaData?.metaTitle?.value ?? PageMetaData.pageTitle?.value;
  const metaDescription =
    PageMetaData?.metaDescription?.value ?? PageMetaData.pageDescription?.value;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" // Fixed the viewport meta tag
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>{pageTitle}</title>
        <meta name="keywords" content={PageMetaData?.metaKeywords?.value ?? ''} />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={PageMetaData?.openGraphTitle?.value ?? ''} />
        <meta property="og:type" content={PageMetaData?.openGraphType?.value ?? ''} />
        <meta property="og:locale" content={context?.language ?? 'en-US'} />{' '}
        <meta property="og:url" content={PageMetaData?.openGraphUrl?.value ?? ''} />
        <meta property="og:image" content={PageMetaData?.OpenGraphImageMediaUrl?.value ?? ''} />
        <meta
          property="og:description"
          content={PageMetaData?.Description?.value ?? metaDescription}
        />
        <meta property="og:site_name" content={PageMetaData?.SiteName ?? ''} />
        <link rel="index" title={PageMetaData?.pageTitle?.value ?? pageTitle} href={publicUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={PageMetaData?.openGraphTitle?.value ?? ''} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={PageMetaData?.OpenGraphImageMediaUrl?.value ?? ''} />
        <link rel="canonical" href={PageMetaData?.canonicalUrl?.value ?? ''} />
        <meta name="apple-mobile-web-app-title" content="NOV.com" />
        <meta name="application-name" content="NOV.com" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="../../../../public/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        id="DTMcontent"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
              if (typeof NOVCom === 'undefined') {
                var NOVCom = {};
              }
              if (typeof NOVCom.DTM === 'undefined') {
                NOVCom.DTM = {};
              }
              NOVCom.DTM.pagename = '${pageTitle}';
              NOVCom.DTM.businessSegment = '${
                PageMetaData?.businessSegments?.value?.toString() ?? ''
              }';
              NOVCom.DTM.businessUnits = '${PageMetaData?.businessUnits?.value?.toString() ?? ''}';
              NOVCom.DTM.Brand = '${PageMetaData?.brand?.fields?.brandName?.value ?? ''}';
              NOVCom.DTM.Capability = '${
                PageMetaData?.capability?.fields?.capabilityName?.value ?? ''
              }';
              NOVCom.DTM.Category = '${
                PageMetaData?.categories?.map(
                  (category: { fields: { categoryName: { value: { toString: () => string } } } }) =>
                    category?.fields?.categoryName?.value.toString()
                ) || []
              }';
            `,
        }}
      />
    </>
  );
};

export default HeadMeta;
