import { SocialShareProps } from './SocialShare';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: SocialShareProps = {
  uid: '2428fe36-1849-44ab-9bb0-c7a3c84351ee',
  componentName: 'SocialShare',
  dataSource: '{3D2C098B-D59C-400C-A73A-9AF947489ABA}',
  fields: {
    page: {
      value: {
        linktype: 'internal',
        querystring: '',
        target: '',
        id: '{6DCF3EBB-A834-4147-A125-1F67EA1199E7}',
        href: '/About/Events/ADIPEC',
      },
    },
    shareIcons: [
      {
        id: 'a80aac59-aeb3-4a3b-adbd-3aff31942000',
        url: '/Data/System/Social-Share-Icons-Folder/Facebook-Share-Icon',
        name: 'Facebook Share Icon',
        displayName: 'Facebook Share Icon',
        fields: {
          iconLabel: {
            value: 'icon-facebook',
          },
          shareUrl: {
            value: 'https://www.facebook.com/sharer/sharer.php?u=',
          },
        },
      },
      {
        id: '12495d45-7c50-417e-8f9c-ff37aff188fa',
        url: '/Data/System/Social-Share-Icons-Folder/LinkedIn-Share',
        name: 'LinkedIn Share',
        displayName: 'LinkedIn Share',
        fields: {
          iconLabel: {
            value: 'icon-linked-in',
          },
          shareUrl: {
            value: 'https://www.linkedin.com/shareArticle?mini=true&url=',
          },
        },
      },
      {
        id: '612306ed-b302-412d-ae7b-a61e58917dc0',
        url: '/Data/System/Social-Share-Icons-Folder/MailTo',
        name: 'MailTo',
        displayName: 'MailTo',
        fields: {
          iconLabel: {
            value: 'icon-mail',
          },
          shareUrl: {
            value: 'mailto:?&subject=Link&body=',
          },
        },
      },
      {
        id: '88dc154d-fe46-425c-847d-2fe3d9e91e57',
        url: '/Data/System/Social-Share-Icons-Folder/Twitter-Share',
        name: 'Twitter Share',
        displayName: 'Twitter Share',
        fields: {
          iconLabel: {
            value: 'icon-twitter',
          },
          shareUrl: {
            value: 'https://twitter.com/intent/tweet?text=',
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
