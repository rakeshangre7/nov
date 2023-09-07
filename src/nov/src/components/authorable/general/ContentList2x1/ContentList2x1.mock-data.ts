import { ContentList2x1Props } from './ContentList2x1';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentList2x1Props = {
  params: {},
  fields: {
    data: {
      datasource: {
        headline: {
          jsonValue: {
            value: 'Explore NOV',
          },
        },
        pages: {
          targetItems: [
            {
              headline: {
                jsonValue: {
                  value: 'Products and Services',
                },
              },
              cardImage: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Products/Products-and-Services-hero.jpg?h=295&iar=0&w=514',
                    alt: 'A drill bit being heated during repair',
                    width: '514',
                    height: '295',
                  },
                },
              },
              subheading: {
                jsonValue: {
                  value:
                    '<p>Throughout every region in the world and every area of drilling and production, our family of companies provides the expertise, equipment, and operational support necessary for success&mdash;now and in the future.</p>',
                },
              },
              primaryURL: {
                path: '/Products-and-Services',
                url: 'https://xmc-nationaloile493-nov-dev.sitecorecloud.io/Products-and-Services',
              },
            },
            {
              headline: {
                jsonValue: {
                  value: 'Careers',
                },
              },
              cardImage: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Careers/Careers-diverse-workers-conference.JPG?h=295&iar=0&w=514',
                    alt: 'NOV employees gather around a conference table',
                    width: '514',
                    height: '295',
                  },
                },
              },
              subheading: {
                jsonValue: {
                  value:
                    '<p>Join our global family and become part of the company that&rsquo;s empowering the global energy industry.</p>',
                },
              },
              primaryURL: {
                path: '/Careers',
                url: 'https://xmc-nationaloile493-nov-dev.sitecorecloud.io/Careers',
              },
            },
          ],
        },
      },
      contextItem: {
        cardCtaText: {
          jsonValue: {
            value: 'Learn More',
          },
        },
      },
    },
  },
  componentName: 'ContentList2x1',
};

export const noData = {
  render: {},
  params: [],
};

export default defaultData;
