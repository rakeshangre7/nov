import { PageNotFoundProps } from './PageNotFound';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: PageNotFoundProps = {
  fields: {
    data: {
      homeItem: {
        notFoundHeadline: {
          jsonValue: {
            value: 'Sorry, we couldn’t find that page.',
          },
        },
        notFoundText: {
          jsonValue: {
            value: 'Try searching or return to our home page.',
          },
        },
        notFoundLink: {
          linkType: 'internal',
          anchor: '',
          url: '/en-US/Search',
          href: '/en-US/Search',
          text: 'What can we help you find?',
          className: 'js-open-search ui-btn--icon',
        },
      },
    },
  },
};

export default defaultData;
