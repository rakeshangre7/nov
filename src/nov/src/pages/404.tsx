import config from 'temp/config';
import {
  GraphQLErrorPagesService,
  SitecoreContext,
  ErrorPages,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import NotFound from 'src/components/layout/NotFound';
import { componentBuilder } from 'temp/componentBuilder';
import PageLayout from '@/components/layout/PageLayout';
import { GetStaticProps } from 'next';
import { siteResolver } from 'lib/site-resolver';

const Custom404 = (props: SitecorePageProps): JSX.Element => {
  if (!(props && props.layoutData)) {
    return <NotFound />;
  }

  return (
    <SitecoreContext
      componentFactory={componentBuilder.getComponentFactory()}
      layoutData={props.layoutData}
    >
      <PageLayout layoutData={props.layoutData} />
    </SitecoreContext>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const site = siteResolver.getByName(config.jssAppName);
  const errorPagesService = new GraphQLErrorPagesService({
    endpoint: config.graphQLEndpoint,
    apiKey: config.sitecoreApiKey,
    siteName: site.name,
    language: context.locale || config.defaultLanguage,
  });
  let resultErrorPages: ErrorPages | null = null;

  if (!process.env.DISABLE_SSG_FETCH) {
    try {
      resultErrorPages = await errorPagesService.fetchErrorPages();
    } catch (error) {
      console.log('Error occurred while fetching error pages');
      console.log(error);
    }
  }

  return {
    props: {
      headLinks: [],
      layoutData: resultErrorPages?.notFoundPage?.rendered || null,
    },
  };
};

export default Custom404;
