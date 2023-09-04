/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  getPublicUrl,
  LayoutServiceData,
  Field,
  RouteData,
  ComponentRendering,
  PlaceholdersData,
  HtmlElementRendering,
  LayoutServiceContextData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
//testting only
const publicUrl = getPublicUrl();

type NewHtmlElementRendering = HtmlElementRendering & {
  componentName?: string;
};
type NewRouteData = RouteData & {
  placeholders: PlaceholdersData & {
    [P in string]: Array<ComponentRendering | NewHtmlElementRendering>;
  };
};
interface LayoutProps {
  layoutData: LayoutServiceData & {
    sitecore: LayoutServiceContextData & {
      route: NewRouteData | null;
    };
  };
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const PageLayout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';
  console.log('layoutData', layoutData?.sitecore?.route?.placeholders?.main?.[0]);
  return (
    <>
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={clsx(mainClassPageEditing, 'theme-default')}>
        <header>
          <div
            id="header"
            className={
              !(
                layoutData?.sitecore?.route?.placeholders?.main?.[0]?.componentName ===
                  'HomePageHero' ||
                layoutData?.sitecore?.route?.placeholders?.main?.[0]?.componentName === 'Hero' ||
                layoutData?.sitecore?.route?.placeholders?.main?.[0]?.componentName === 'HeroSlider'
              )
                ? 'no-hero'
                : ''
            }
          >
            {route && <Placeholder name="header" rendering={route} />}
          </div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="footer" rendering={route} />}</div>
        </footer>
      </div>
    </>
  );
};

export default PageLayout;
