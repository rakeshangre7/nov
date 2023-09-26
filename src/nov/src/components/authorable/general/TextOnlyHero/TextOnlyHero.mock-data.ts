import { TextOnlyHeroProps } from './TextOnlyHero';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: TextOnlyHeroProps = {
  uid: '08cf82d9-d7c0-4bb8-85f0-ef89de7332df',
  componentName: 'TextOnlyHero',
  dataSource: '{E2A52488-97F4-4C38-BDC7-D117C10BFC3D}',
  fields: {
    data: {
      datasource: {
        contentTag: {
          jsonValue: {
            id: '68f83742-71b9-4716-b503-331a758df65a',
            url: '/Data/System/Content-Tags/Article',
            name: 'Article',
            displayName: 'Article',
            fields: {
              tag: {
                value: 'Article',
              },
            },
          },
        },
        heading: {
          jsonValue: {
            value: 'COVID-19',
          },
        },
        subheading: {
          jsonValue: {
            value: "<p>We're rising to the challenges resulting from the virus.</p>",
          },
        },
        cta: {
          jsonValue: {
            value: {
              text: 'Test',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{784DD9E8-C40D-47F4-ACCF-893251B02EB3}',
              href: '/About',
            },
          },
        },
      },
      contextItem: {
        contentTag: {
          jsonValue: {
            id: '1f7e6cf6-397f-43e3-8be0-f22a71e03f76',
            url: '/Data/System/Content-Tags/Product',
            name: 'Product',
            displayName: 'Product/Service',
            fields: {
              tag: {
                value: 'Product',
              },
            },
          },
        },
        heading: {
          jsonValue: {
            value: 'Subsea Oil Storage',
          },
        },
        subheading: {
          jsonValue: {
            value:
              '<p>Our subsea storage system is designed to store hydrocarbons with or without dissolved gas at ambient pressure.</p>',
          },
        },
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
