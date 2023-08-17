import { FooterProps } from './Footer';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: FooterProps = {
  uid: '6dbb2883-8393-4232-94c8-2ebae5cbb48d',
  componentName: 'Footer',
  dataSource: '',
  params: {},
  fields: {
    data: {
      footerItem: {
        logo: {
          jsonValue: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/nov-red-and-grey-logo.svg?h=24&iar=0&w=56',
              alt: 'nov',
              width: '56',
              height: '24',
            },
          },
        },
        contactLink: {
          jsonValue: {
            value: {
              text: 'footer',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '',
              querystring: '',
              id: '{447B01DE-B691-4983-B4A7-1E03DFF32250}',
              href: '/',
            },
          },
        },
        copyrightText: {
          jsonValue: {
            value: '© 2018 National Oilwell Varco. All Rights Reserved.',
          },
        },
        footerLinks: {
          jsonValue: [
            {
              id: '2030c557-d31f-489d-87b2-d27750e32e41',
              url: '/en-US/Data/Footer/Footer/Footer-Links/Media-Kit',
              name: 'Media Kit',
              displayName: 'Media Kit',
              fields: {
                link: {
                  value: {
                    href: 'https://brandfolder.com/nov/media-kit',
                    text: 'Media Kit',
                    linktype: 'external',
                    url: 'https://brandfolder.com/nov/media-kit',
                    anchor: '',
                    target: '',
                  },
                },
              },
            },
            {
              id: 'bdb84342-5184-48fe-959e-accb48deef1f',
              url: '/en-US/Data/Footer/Footer/Footer-Links/Policies',
              name: 'Policies',
              displayName: 'Policies',
              fields: {
                link: {
                  value: {
                    href: '',
                    text: '',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    title: '',
                    target: '',
                    querystring: '',
                    id: '{1E32B8F2-C3C1-4AC3-A0B6-070CE13BD306}',
                  },
                },
              },
            },
            {
              id: 'fd9b0807-1490-42de-80c9-6a39e39d2dc0',
              url: '/en-US/Data/Footer/Footer/Footer-Links/Privacy-Policy',
              name: 'Privacy Policy',
              displayName: 'Privacy Policy',
              fields: {
                link: {
                  value: {
                    href: '',
                    text: 'Privacy Policy',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    title: '',
                    target: '',
                    querystring: '',
                    id: '{B2281FFB-4B61-42D7-A804-2F36FE0A40AF}',
                  },
                },
              },
            },
            {
              id: '5e8db53c-3e3b-44eb-8497-b700b7b29b35',
              url: '/en-US/Data/Footer/Footer/Footer-Links/Terms-of-Use',
              name: 'Terms of Use',
              displayName: 'Terms of Use',
              fields: {
                link: {
                  value: {
                    href: '',
                    text: 'Terms of Use',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    title: '',
                    target: '',
                    querystring: '',
                    id: '{2323AFC1-5368-483A-A2B0-569FD569E441}',
                  },
                },
              },
            },
            {
              id: 'e059ff17-eca3-4004-bd0b-82d00b654c50',
              url: '/en-US/Data/Footer/Footer/Footer-Links/Trust-Center',
              name: 'Trust Center',
              displayName: 'Trust Center',
              fields: {
                link: {
                  value: {
                    href: '',
                    text: 'Trust Center',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    title: '',
                    target: '',
                    querystring: '',
                    id: '{40D919BC-8F94-4BC2-90CA-EE7BD1EE41A0}',
                  },
                },
              },
            },
          ],
        },
        footerSocialLinks: {
          jsonValue: [
            {
              id: 'd1dc540c-6c9b-416a-a920-a9399800947e',
              url: '/en-US/Data/Footer/Footer/Social-Links-Folder/Facebook',
              name: 'Facebook',
              displayName: 'Facebook',
              fields: {
                socialChannelUrl: {
                  value: 'https://www.facebook.com/NOVGlobal/',
                },
                socialChannel: {
                  value: 'facebook',
                },
              },
            },
            {
              id: 'e12896da-600e-44d7-b72b-952c0d8c1ee5',
              url: '/en-US/Data/Footer/Footer/Social-Links-Folder/Instagram',
              name: 'Instagram',
              displayName: 'Instagram',
              fields: {
                socialChannelUrl: {
                  value: 'https://www.instagram.com/novglobal/',
                },
                socialChannel: {
                  value: 'instagram',
                },
              },
            },
            {
              id: '174c7596-72cb-4fd1-9571-61e1aed59c6f',
              url: '/en-US/Data/Footer/Footer/Social-Links-Folder/LinkedIn',
              name: 'LinkedIn',
              displayName: 'LinkedIn',
              fields: {
                socialChannelUrl: {
                  value: 'https://www.linkedin.com/company/national-oilwell-varco',
                },
                socialChannel: {
                  value: 'linked-in',
                },
              },
            },
            {
              id: '70258b4a-7252-41d0-8216-d28bbfec216a',
              url: '/en-US/Data/Footer/Footer/Social-Links-Folder/Twitter',
              name: 'Twitter',
              displayName: 'Twitter',
              fields: {
                socialChannelUrl: {
                  value: 'https://twitter.com/NOVGlobal',
                },
                socialChannel: {
                  value: 'twitter',
                },
              },
            },
            {
              id: 'b981c0b3-bb80-4031-9c4e-e9e2d7923699',
              url: '/en-US/Data/Footer/Footer/Social-Links-Folder/YouTube',
              name: 'YouTube',
              displayName: 'YouTube',
              fields: {
                socialChannelUrl: {
                  value: 'https://www.youtube.com/nationaloilwellvarco',
                },
                socialChannel: {
                  value: 'youtube',
                },
              },
            },
          ],
        },
      },
      homeItem: {
        primaryMenu: {
          results: [
            {
              menuTitle: {
                jsonValue: {
                  value: 'About Us',
                },
              },
              hideInNavigation: {
                jsonValue: {
                  value: true,
                },
              },
              hideInFooterNavigation: {
                jsonValue: {
                  value: true,
                },
              },
              primaryURL: {
                path: '/About',
                url: 'https://xmcloudcm.localhost/en-US/About',
              },
              secondaryMenu: {
                results: [
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Industry Events',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/About/Events',
                      url: 'https://xmcloudcm.localhost/en-US/About/Events',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'News',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/About/News',
                      url: 'https://xmcloudcm.localhost/en-US/About/News',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'NOV Live',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/About/NOV-Live',
                      url: 'https://xmcloudcm.localhost/en-US/About/NOV-Live',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'NOV Today Podcast',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/About/NOV-Today-Podcast',
                      url: 'https://xmcloudcm.localhost/en-US/About/NOV-Today-Podcast',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Our Business Units',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/About/Our-Business-Units',
                      url: 'https://xmcloudcm.localhost/en-US/About/Our-Business-Units',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Our Company Structure',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/About/Our-Company-Structure',
                      url: 'https://xmcloudcm.localhost/en-US/About/Our-Company-Structure',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Sustainability',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/About/Sustainability',
                      url: 'https://xmcloudcm.localhost/en-US/About/Sustainability',
                    },
                  },
                ],
              },
              secondaryMenu2: {
                results: [],
              },
            },
            {
              menuTitle: {
                jsonValue: {
                  value: 'Careers',
                },
              },
              hideInNavigation: {
                jsonValue: {
                  value: false,
                },
              },
              hideInFooterNavigation: {
                jsonValue: {
                  value: false,
                },
              },
              primaryURL: {
                path: '/Careers',
                url: 'https://xmcloudcm.localhost/en-US/Careers',
              },
              secondaryMenu: {
                results: [
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Diversity',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Careers/Diversity',
                      url: 'https://xmcloudcm.localhost/en-US/Careers/Diversity',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Early Career Development',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Careers/Early-Career-Development',
                      url: 'https://xmcloudcm.localhost/en-US/Careers/Early-Career-Development',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Our Employees',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Careers/Our-Employees',
                      url: 'https://xmcloudcm.localhost/en-US/Careers/Our-Employees',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Search for Jobs',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Careers/Search-for-Jobs',
                      url: 'https://xmcloudcm.localhost/en-US/Careers/Search-for-Jobs',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Working at NOV',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Careers/Working-at-NOV',
                      url: 'https://xmcloudcm.localhost/en-US/Careers/Working-at-NOV',
                    },
                  },
                ],
              },
              secondaryMenu2: {
                results: [],
              },
            },
            {
              menuTitle: {
                jsonValue: {
                  value: 'Investors',
                },
              },
              hideInNavigation: {
                jsonValue: {
                  value: false,
                },
              },
              hideInFooterNavigation: {
                jsonValue: {
                  value: false,
                },
              },
              primaryURL: {
                path: '/Investors',
                url: 'https://xmcloudcm.localhost/en-US/Investors',
              },
              secondaryMenu: {
                results: [
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Annual Results',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Annual-Results',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Annual-Results',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Company Overview',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Company-Overview',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Company-Overview',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Corporate Governance',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Corporate-Governance',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Corporate-Governance',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Events',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Events',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Events',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Investor Contacts',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/IR-Contacts',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/IR-Contacts',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Join our Q3 2019 conference call',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: true,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: true,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Join-our-Q3-2019-conference-call',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Join-our-Q3-2019-conference-call',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'News Releases',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/News-Releases',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/News-Releases',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Presentations',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Presentations',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Presentations',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Quarterly Results',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Quarterly-Results',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Quarterly-Results',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'SEC Filings',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/SEC-Filings',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/SEC-Filings',
                    },
                  },
                ],
              },
              secondaryMenu2: {
                results: [
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Shareholder Information',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Shareholder-Information',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Shareholder-Information',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Stock Information',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Investors/Stock-Information',
                      url: 'https://xmcloudcm.localhost/en-US/Investors/Stock-Information',
                    },
                  },
                ],
              },
            },
            {
              menuTitle: {
                jsonValue: {
                  value: 'Products and Services',
                },
              },
              hideInNavigation: {
                jsonValue: {
                  value: false,
                },
              },
              hideInFooterNavigation: {
                jsonValue: {
                  value: false,
                },
              },
              primaryURL: {
                path: '/Products-and-Services',
                url: 'https://xmcloudcm.localhost/en-US/Products-and-Services',
              },
              secondaryMenu: {
                results: [
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Brands',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Products-and-Services/Brands',
                      url: 'https://xmcloudcm.localhost/en-US/Products-and-Services/Brands',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Capabilities and Industries',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Products-and-Services/Capabilities',
                      url: 'https://xmcloudcm.localhost/en-US/Products-and-Services/Capabilities',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Document Library',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Products-and-Services/Document-Library',
                      url: 'https://xmcloudcm.localhost/en-US/Products-and-Services/Document-Library',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Patents',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Products-and-Services/Patents',
                      url: 'https://xmcloudcm.localhost/en-US/Products-and-Services/Patents',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Tools',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Products-and-Services/Tools',
                      url: 'https://xmcloudcm.localhost/en-US/Products-and-Services/Tools',
                    },
                  },
                  {
                    menuTitle: {
                      jsonValue: {
                        value: 'Training',
                      },
                    },
                    hideInNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    hideInFooterNavigation: {
                      jsonValue: {
                        value: false,
                      },
                    },
                    primaryURL: {
                      path: '/Products-and-Services/Training',
                      url: 'https://xmcloudcm.localhost/en-US/Products-and-Services/Training',
                    },
                  },
                ],
              },
              secondaryMenu2: {
                results: [],
              },
            },
          ],
        },
      },
    },
  },
  rendering: {
    componentName: '',
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
