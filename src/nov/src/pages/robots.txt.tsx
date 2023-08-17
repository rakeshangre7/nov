import { GetServerSideProps } from 'next';
import React from 'react';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import RobotsTextQuery from '@/graphql/RobotsTextQuery';
import RootItemContentQuery from '@/graphql/RootItemId';
import config from 'temp/config';

// type for  RootItemData
type rootItemData = {
  layout: {
    item: {
      homeItemPath: string;
      homeItemId: string;
      contentRoot: [];
    };
  };
};

// type for  RoBots data
type robotsData = {
  datasource: {
    field: {
      value: string;
    };
  };
};

const RobotsTxt: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // GraphQL query to get Robots Content from site core
  const gqClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  // get Root Item Path for app
  const rootItemContent = await gqClient.request<rootItemData>(RootItemContentQuery, {
    sitename: config.jssAppName,
    language: config.defaultLanguage,
  });
  const rootItemPath = rootItemContent.layout.item.homeItemPath;

  // get robots content from home page field
  const robotContent = await gqClient.request<robotsData>(RobotsTextQuery, {
    datasource: rootItemPath,
    language: config.defaultLanguage,
  });

  const { res } = context;

  let set = 'Disallow';
  // update below if condition after go live as per environment name
  if (process.env.Environment == 'production') {
    set = 'Allow';
  }

  if (res) {
    res.setHeader('Content-Type', 'text/plain');
    if (robotContent?.datasource !== null && robotContent?.datasource?.field?.value !== '') {
      res.write(robotContent?.datasource?.field?.value);
    } else {
      res.write(`User-agent: * 
    ${set}: /
`);
    }
    res.end();
  }
  return {
    props: {},
  };
};

export default RobotsTxt;
