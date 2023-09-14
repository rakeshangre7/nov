import { HeroProps } from './Hero';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: HeroProps = {
  rendering: { componentName: 'Hero' },
  params: {
    addGradient: '1',
    textColor: 'white',
  },
  fields: {
    data: {
      datasource: null,
      contextItem: {
        contentTag: {
          jsonValue: {
            id: 'ea155798-89f9-42a8-a18a-1921664d1e01',
            url: '/Data/System/Content-Tags/Brand',
            name: 'Brand',
            displayName: 'Brand',
            fields: {
              tag: {
                value: 'Brand',
              },
            },
          },
        },
        heading: {
          jsonValue: {
            value: 'test',
          },
        },
        subheading: {
          jsonValue: {
            value:
              '<p><span>Every day, the oil and gas industry&rsquo;s best minds put more than 150 years of experience to work to help our customers achieve lasting success. We have the people, capabilities, and vision to serve the needs of a challenging and evolving industry. One the world can&rsquo;t live without.</span></p>',
          },
        },
        cardCtaText: {
          jsonValue: {
            value: 'Learn More',
          },
        },
        pageImage: {
          jsonValue: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/About/We-Are-NOV-About/NOV-employee-on-rigsite.jpg?h=1080&iar=0&w=1920',
              alt: 'Service technician looking at rigsite',
              width: '1920',
              height: '1080',
            },
          },
        },
      },
    },
  },
};

export const noData = {
  render: {},
  params: [],
};

export default defaultData;
