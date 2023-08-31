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
          jsonValue: {
            value: {
              class: 'js-open-search ui-btn--icon',
              id: '{4DCF14F6-DD6D-4748-B370-8726A62DF201}',
              querystring: '',
              anchor: '',
              target: '',
              title: '',
              linktype: 'internal',
              text: 'What can we help you find?',
              url: '/nov/nov/Home/Search',
              href: '/Search',
            },
          },
        },
      },
    },
  },
};

export default defaultData;
