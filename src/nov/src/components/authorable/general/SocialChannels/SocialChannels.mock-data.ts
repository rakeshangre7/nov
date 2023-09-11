import { SocialChannelsProps } from './SocialChannels';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: SocialChannelsProps = {
  uid: '46f42864-fe69-4624-9547-38eeca22054b',
  componentName: 'SocialChannels',
  dataSource: '{4809C534-9000-406A-89A5-1EEF3EA8C987}',
  params: {
    CacheClearingBehavior: 'Clear on publish',
  },
  fields: {
    backgroundColor: {
      value: 'white',
    },
    copy: {
      value:
        'To learn more about what we&rsquo;re doing to power the industry that powers the world, follow us on social media.',
    },
    headline: {
      value: 'Follow Us',
    },
    socialIcons: [
      {
        id: 'd1dc540c-6c9b-416a-a920-a9399800947e',
        url: '/en-US/Data/System/Social-Links-Folder/Facebook',
        name: 'Facebook',
        displayName: 'Facebook',
        fields: {
          socialChannel: {
            value: 'facebook',
          },
          socialChannelUrl: {
            value: 'https://www.facebook.com/NOVGlobal/',
          },
        },
      },
      {
        id: 'e12896da-600e-44d7-b72b-952c0d8c1ee5',
        url: '/en-US/Data/System/Social-Links-Folder/Instagram',
        name: 'Instagram',
        displayName: 'Instagram',
        fields: {
          socialChannel: {
            value: 'instagram',
          },
          socialChannelUrl: {
            value: 'https://www.instagram.com/novglobal/',
          },
        },
      },
      {
        id: '174c7596-72cb-4fd1-9571-61e1aed59c6f',
        url: '/en-US/Data/System/Social-Links-Folder/LinkedIn',
        name: 'LinkedIn',
        displayName: 'LinkedIn',
        fields: {
          socialChannel: {
            value: 'linked-in',
          },
          socialChannelUrl: {
            value: 'https://www.linkedin.com/company/national-oilwell-varco',
          },
        },
      },
      {
        id: '70258b4a-7252-41d0-8216-d28bbfec216a',
        url: '/en-US/Data/System/Social-Links-Folder/Twitter',
        name: 'Twitter',
        displayName: 'Twitter',
        fields: {
          socialChannel: {
            value: 'twitter',
          },
          socialChannelUrl: {
            value: 'https://twitter.com/NOVGlobal',
          },
        },
      },
      {
        id: 'b981c0b3-bb80-4031-9c4e-e9e2d7923699',
        url: '/en-US/Data/System/Social-Links-Folder/YouTube',
        name: 'YouTube',
        displayName: 'YouTube',
        fields: {
          socialChannel: {
            value: 'youtube',
          },
          socialChannelUrl: {
            value: 'https://www.youtube.com/nationaloilwellvarco',
          },
        },
      },
    ],
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
