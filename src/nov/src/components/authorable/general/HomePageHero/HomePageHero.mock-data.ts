import { HomePageHeroProps } from './HomePageHero';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: HomePageHeroProps = {
  uid: 'a409deae-a83c-4b8a-bb7e-241632b43108',
  componentName: 'HomePageHero',
  dataSource: '{5D0D63EE-DEF7-4C46-9669-47B79F45B829}',
  params: {},
  fields: {
    slides: [
      {
        id: '85f24ee3-4947-4daf-8f4b-5ba9b44945e2',
        url:
          '/en-US/Data/System/Default-Templates-Content/B3-Home-Page-Hero/B3-Home-Page-Hero-Slide',
        name: 'B3 Home Page Hero Slide',
        displayName: 'B3 Home Page Hero Slide',
        fields: {
          addGradient: {
            value: false,
          },
          pages: [
            {
              id: '447b01de-b691-4983-b4a7-1e03dff32250',
              url: '/en-US',
              name: 'Home',
              displayName: 'Home',
              fields: {
                novPortalLogin: {
                  value:
                    '<link text="Sign in" anchor="" linktype="internal" class="" title="" target="_blank" querystring="" id="{5FB1FC64-36D4-49B6-B1B4-76EEE08A563A}" />',
                },
                portalDescription: {
                  value: 'Access multiple NOV applications and services with one login.',
                },
                portalHeader: {
                  value: 'MYNOV is a single sign-on solution.',
                },
                portalRegisterUrl: {
                  value: {
                    text: 'Register here',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    title: '',
                    target: '_blank',
                    querystring: '',
                    id: '{25519726-30F5-4043-9B3A-301C5B423462}',
                    href: '/Register-Redirect',
                  },
                },
                productsAndServicesLabel: {
                  value: 'Products and Services',
                },
                searchLabel: {
                  value: 'Search',
                },
                searchPlaceholder: {
                  value: 'search...',
                },
                searchSuggestionsLabel: {
                  value: 'Suggestions',
                },
                menuLabel: {
                  value: 'Menu',
                },
                sitelogo: {
                  value: {
                    src:
                      'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/nov-red-and-grey-logo.svg?h=24&iar=0&w=56',
                    alt: 'nov',
                    width: '56',
                    height: '24',
                  },
                },
                sitelogotransparent: {
                  value: {
                    src:
                      'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/nov-white-logo.svg?h=24&iar=0&w=56',
                    alt: 'nov',
                    width: '56',
                    height: '24',
                  },
                },
                footerSocialLinks: [
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
                ],
                logo: {
                  value: {},
                },
                contactLink: {
                  value: {
                    id: '{8CB25E38-9AE9-422E-B01B-7637D78B28F3}',
                    querystring: '',
                    target: '',
                    text: 'Contact Us',
                    url: '/NOV Com/Home/Contact',
                    linktype: 'internal',
                    href: '/Contact',
                  },
                },
                footerLinks: [
                  {
                    id: 'fd9b0807-1490-42de-80c9-6a39e39d2dc0',
                    url: '/en-US/Data/System/Footer-Links/Privacy-Policy',
                    name: 'Privacy Policy',
                    displayName: 'Privacy Policy',
                    fields: {
                      link: {
                        value: {
                          class: '',
                          id: '{B2281FFB-4B61-42D7-A804-2F36FE0A40AF}',
                          querystring: '',
                          anchor: '',
                          target: '',
                          title: '',
                          linktype: 'internal',
                          text: 'Privacy Policy',
                          url: '/nov/nov/Home/Privacy Policy',
                          href: '/Privacy-Policy',
                        },
                      },
                    },
                  },
                  {
                    id: '5e8db53c-3e3b-44eb-8497-b700b7b29b35',
                    url: '/en-US/Data/System/Footer-Links/Terms-of-Use',
                    name: 'Terms of Use',
                    displayName: 'Terms of Use',
                    fields: {
                      link: {
                        value: {
                          class: '',
                          id: '{2323AFC1-5368-483A-A2B0-569FD569E441}',
                          querystring: '',
                          anchor: '',
                          target: '',
                          title: '',
                          linktype: 'internal',
                          text: 'Terms of Use',
                          url: '/nov/nov/Home/Terms of Use',
                          href: '/Terms-of-Use',
                        },
                      },
                    },
                  },
                  {
                    id: 'bdb84342-5184-48fe-959e-accb48deef1f',
                    url: '/en-US/Data/System/Footer-Links/Policies',
                    name: 'Policies',
                    displayName: 'Policies',
                    fields: {
                      link: {
                        value: {
                          class: '',
                          id: '{1E32B8F2-C3C1-4AC3-A0B6-070CE13BD306}',
                          querystring: '',
                          anchor: '',
                          target: '',
                          title: '',
                          linktype: 'internal',
                          text: '',
                          url: '/nov/nov/Home/Policies',
                          href: '/Policies',
                        },
                      },
                    },
                  },
                  {
                    id: 'e059ff17-eca3-4004-bd0b-82d00b654c50',
                    url: '/en-US/Data/System/Footer-Links/Trust-Center',
                    name: 'Trust Center',
                    displayName: 'Trust Center',
                    fields: {
                      link: {
                        value: {
                          class: '',
                          id: '{40D919BC-8F94-4BC2-90CA-EE7BD1EE41A0}',
                          querystring: '',
                          anchor: '',
                          target: '',
                          title: '',
                          linktype: 'internal',
                          text: 'Trust Center',
                          url: '/nov/nov/Home/Trust Center',
                          href: '/Trust-Center',
                        },
                      },
                    },
                  },
                  {
                    id: '2030c557-d31f-489d-87b2-d27750e32e41',
                    url: '/en-US/Data/System/Footer-Links/Media-Kit',
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
                ],
                copyrightText: {
                  value: '© 2018 National Oilwell Varco. All Rights Reserved.',
                },
                hideDefaultNotFoundModuleContent: {
                  value: false,
                },
                hideDefaultPageGoneModuleContent: {
                  value: false,
                },
                hideDefaultAccessDeniedModuleContent: {
                  value: false,
                },
                accessDeniedHeadline: {
                  value: '403 Access Denied',
                },
                accessDeniedLink: {
                  value:
                    '<link text="What can we help you find?" linktype="javascript" url="javascript://" anchor="" class="B3-home-page-hero__action-box__search js-open-search" />',
                },
                accessDeniedText: {
                  value: 'Acces Denied',
                },
                notFoundHeadline: {
                  value: 'Sorry, we couldn’t find that page.',
                },
                notFoundLink: {
                  value:
                    '<link class="js-open-search ui-btn--icon" id="{4DCF14F6-DD6D-4748-B370-8726A62DF201}" querystring="" anchor="" target="" title="" linktype="internal" text="What can we help you find?" url="/nov/nov/Home/Search" />',
                },
                notFoundText: {
                  value: 'Try searching or return to our home page.',
                },
                pageGoneHeadline: {
                  value: 'Page Gone',
                },
                pageGoneLink: {
                  value:
                    '<link text="" anchor="" linktype="internal" class="" title="" target="" querystring="" id="{110D559F-DEA5-42EA-9C1C-8A5DF7E70EF9}" />',
                },
                pageGoneText: {
                  value: 'Page Gone Text',
                },
                serverErrorHeadline: {
                  value: 'Server Error',
                },
                labelDownload: {
                  value: 'Download',
                },
                labelOf: {
                  value: 'of',
                },
                labelOverview: {
                  value: 'Overview',
                },
                labelProductReadMore: {
                  value: 'View Product',
                },
                labelReadMore: {
                  value: 'Read More',
                },
                labelViewAll: {
                  value: 'View All',
                },
                searchResultDownloadLabel: {
                  value: 'Download',
                },
                searchResultReadMoreLabel: {
                  value: 'Read More',
                },
                Handle: {
                  value: '@NOVGlobal',
                },
                productfallbackimagecropregion: {
                  value: '',
                },
                contentlistfallbackimagecropregion: {
                  value: '',
                },
                productFallbackImage: {
                  value: {},
                },
                contentListFallbackImage: {
                  value: {},
                },
                acceptText: {
                  value: 'I Accept',
                },
                cookieSettingsContent: {
                  value:
                    '<p>This website would like to use cookies to store information on your computer which will help to customize your interactions with us and provide you with a better browser experience. You may delete and block cookies from this site, but parts of the site may not function as a result. More information about cookies and your choice can be found in our Privacy Policy. To accept cookies from this site, please click the &lsquo;I Accept&rsquo; button below.</p>',
                },
                declineText: {
                  value: 'I Decline',
                },
                robotsTxt: {
                  value:
                    'Disallow: /search\r\nDisallow: /products/duraflex\r\nDisallow: /about/our-business-units/rig-equipment/rig-technologies-supply-chain-resources\r\nDisallow: /misc/ideal-efrac-showcase\r\nDisallow: /misc/ideal-efrac-showcase/thank-you',
                },
                experience: {
                  value: 'Started with NOV: ',
                },
                location: {
                  value: 'Location: ',
                },
                position: {
                  value: 'Position: ',
                },
                canonicalUrl: {
                  value: '',
                },
                metaDescription: {
                  value:
                    'National Oilwell Varco provides oilfield equipment, technologies, and expertise that answer the challenges of oil and gas customers worldwide with safety, efficiency, and reliability.',
                },
                metaKeywords: {
                  value: '',
                },
                openGraphDescription: {
                  value:
                    'National Oilwell Varco provides oilfield equipment, technologies, and expertise that answer the challenges of oil and gas customers worldwide with safety, efficiency, and reliability.',
                },
                openGraphImage: {
                  value: {},
                },
                openGraphTitle: {
                  value: 'National Oilwell Varco',
                },
                openGraphType: {
                  value: 'website',
                },
                openGraphUrl: {
                  value: '',
                },
                contentTag: {
                  id: '97803e00-415e-418e-bd59-ec82dc5f73d8',
                  url: '/en-US/Data/System/Content-Tags/Standard',
                  name: 'Standard',
                  displayName: 'Standard',
                  fields: {
                    tag: {
                      value: 'Standard',
                    },
                  },
                },
                cardImage: {
                  value: {
                    src:
                      'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Products/Resources-and-Tools/drillbit.jpg?h=295&iar=0&w=514',
                    alt: 'Closeup of an NOV drill bit',
                    width: '514',
                    height: '295',
                  },
                },
                cardimagecropregion: {
                  value: '',
                },
                headline: {
                  value: 'National Oilwell Varco',
                },
                pageImage: {
                  value: {
                    src:
                      'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Products/Resources-and-Tools/drillbit.jpg?h=1080&iar=0&w=1920',
                    alt: 'Closeup of an NOV drill bit',
                    width: '1920',
                    height: '1080',
                  },
                },
                pageimagecropregion: {
                  value: '',
                },
                pageTitle: {
                  value: 'National Oilwell Varco',
                },
                searchResultText: {
                  value: '',
                },
                subheading: {
                  value:
                    '<p>National Oilwell Varco provides oilfield equipment, technologies, and expertise that answer the challenges of oil and gas customers worldwide with safety, efficiency, and reliability.</p>',
                },
                mobileMenuTitle: {
                  value: 'NOV Mobile Menu',
                },
                submenuText: {
                  value: 'NOV Submenu',
                },
                hideFromSearch: {
                  value: false,
                },
                hideInFooterNavigation: {
                  value: false,
                },
                menuTitle: {
                  value: 'NOV Menu',
                },
                hideInNavigation: {
                  value: false,
                },
                hideInSecondaryNavigation: {
                  value: false,
                },
                featuredStoryAbstract: {
                  value:
                    'Our family of companies is organized to provide expert solutions, equipment, and operational support to optimize your drilling and production operations.',
                },
                featuredStoryCtaText: {
                  value: 'Learn More',
                },
                featuredStoryHeadline: {
                  value: 'Our Company Structure',
                },
                featuredStorySubItemLink: {
                  value:
                    '<link id="{45A61597-4FA9-4A19-8EBD-A13FC8BF78C7}" querystring="" target="" linktype="internal" url="/nov/nov/Home/About/Our Company Structure" />',
                },
                author: {
                  value: 'sitecore\\ashwin',
                },
                publishDate: {
                  value: '2018-10-15T00:00:00Z',
                },
                Content: {
                  value: '',
                },
                Title: {
                  value: '',
                },
                date: {
                  value: '0001-01-01T00:00:00Z',
                },
                NavigationFilter: [],
                NavigationClass: null,
                NavigationTitle: {
                  value: '',
                },
                SxaTags: [],
                'Page Design': {
                  id: '1ae8d3f5-0037-498b-9702-d237adc45b38',
                  url: '/en-US/Presentation/Page-Designs/Default',
                  name: 'Default',
                  displayName: 'Default',
                  fields: {
                    PartialDesigns: [
                      {
                        id: '2859626f-12c5-4e72-994e-aa8d3937e0dc',
                        url: '/en-US/Presentation/Partial-Designs/Footer',
                        name: 'Footer',
                        displayName: 'Footer',
                        fields: {
                          'Base Partial Design': null,
                          Signature: {
                            value: 'footer',
                          },
                        },
                      },
                      {
                        id: '481527dd-ff75-442f-bf30-871b796a16e8',
                        url: '/en-US/Presentation/Partial-Designs/Header',
                        name: 'Header',
                        displayName: 'Header',
                        fields: {
                          'Base Partial Design': null,
                          Signature: {
                            value: 'header',
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          ],
          imageCropRegion: {
            value: '',
          },
          image: {
            value: {},
          },
          backgroundVideo: {
            value: '',
          },
        },
      },
      {
        id: '860b583e-d3ae-4824-86d0-c65ecd894a8c',
        url:
          '/en-US/Data/System/Default-Templates-Content/B3-Home-Page-Hero/B3-Home-Page-Hero-Slide-2',
        name: 'B3 Home Page Hero Slide 2',
        displayName: 'B3 Home Page Hero Slide 2',
        fields: {
          addGradient: {
            value: false,
          },
          pages: [
            {
              id: '4113e0af-27a5-4efc-86ba-ee320dfa4c5e',
              url: '/en-US/Products-and-Services',
              name: 'Products and Services',
              displayName: 'Products and Services',
              fields: {
                businessSegments: [],
                businessUnits: [],
                canonicalUrl: {
                  value: '',
                },
                metaDescription: {
                  value:
                    'We provide customers worldwide the drilling and production expertise, equipment, and operational support necessary for success—now and in the future.',
                },
                metaKeywords: {
                  value: '',
                },
                openGraphDescription: {
                  value: '',
                },
                openGraphImage: {
                  value: {},
                },
                openGraphTitle: {
                  value: '',
                },
                openGraphType: {
                  value: '',
                },
                openGraphUrl: {
                  value: '',
                },
                contentTag: {
                  id: '97803e00-415e-418e-bd59-ec82dc5f73d8',
                  url: '/en-US/Data/System/Content-Tags/Standard',
                  name: 'Standard',
                  displayName: 'Standard',
                  fields: {
                    tag: {
                      value: 'Standard',
                    },
                  },
                },
                cardImage: {
                  value: {
                    src:
                      'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Products/Products-and-Services-hero.jpg?h=295&iar=0&w=514',
                    alt: 'A drill bit being heated during repair',
                    width: '514',
                    height: '295',
                  },
                },
                cardimagecropregion: {
                  value: '',
                },
                headline: {
                  value: 'Products and Services',
                },
                pageImage: {
                  value: {
                    src:
                      'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Products/Products-and-Services-hero.jpg?h=1080&iar=0&w=1920',
                    alt: 'A drill bit being heated during repair',
                    width: '1920',
                    height: '1080',
                  },
                },
                pageimagecropregion: {
                  value: '',
                },
                pageTitle: {
                  value: 'Products and Services',
                },
                searchResultText: {
                  value: '',
                },
                subheading: {
                  value:
                    '<p>Throughout every region in the world and every area of drilling and production, our family of companies provides the expertise, equipment, and operational support necessary for success&mdash;now and in the future.</p>',
                },
                mobileMenuTitle: {
                  value: 'Products and Services',
                },
                submenuText: {
                  value: '',
                },
                hideFromSearch: {
                  value: false,
                },
                hideInFooterNavigation: {
                  value: false,
                },
                menuTitle: {
                  value: 'Products and Services',
                },
                hideInNavigation: {
                  value: false,
                },
                hideInSecondaryNavigation: {
                  value: false,
                },
                featuredStoryAbstract: {
                  value:
                    'Throughout every region in the world and every area of drilling and production, our family of companies provides the expertise, equipment, and operational support necessary for success—now and in the future.',
                },
                featuredStoryCtaText: {
                  value: 'Products and Services',
                },
                featuredStoryHeadline: {
                  value: 'Products and Services',
                },
                featuredStorySubItemLink: {
                  value:
                    '<link id="{4113E0AF-27A5-4EFC-86BA-EE320DFA4C5E}" querystring="" target="" linktype="internal" url="/nov/nov/Home/Products and Services" />',
                },
                author: {
                  value: 'sitecore\\ashwin',
                },
                publishDate: {
                  value: '2018-10-15T00:00:00Z',
                },
                Content: {
                  value: '',
                },
                Title: {
                  value: '',
                },
                date: {
                  value: '0001-01-01T00:00:00Z',
                },
                NavigationFilter: [],
                NavigationClass: null,
                NavigationTitle: {
                  value: '',
                },
                SxaTags: [],
                'Page Design': null,
              },
            },
          ],
          imageCropRegion: {
            value: '',
          },
          image: {
            value: {},
          },
          backgroundVideo: {
            value: '',
          },
        },
      },
      {
        id: 'e9c08848-17e8-432c-9f3b-ae2881109f02',
        url:
          '/en-US/Data/System/Default-Templates-Content/B3-Home-Page-Hero/B3-Home-Page-Hero-Slide-3',
        name: 'B3 Home Page Hero Slide 3',
        displayName: 'B3 Home Page Hero Slide 3',
        fields: {
          addGradient: {
            value: false,
          },
          pages: [
            {
              id: 'b6e77496-7bee-48dc-9afb-11df7eacc15a',
              url: '/en-US/Products-and-Services/Brands',
              name: 'Brands',
              displayName: 'Brands',
              fields: {
                taxonomy: {
                  value: 'brand',
                },
                businessSegments: [],
                businessUnits: [],
                canonicalUrl: {
                  value: '',
                },
                metaDescription: {
                  value:
                    'Explore our portfolio of trusted brands that supply our products and services to oilfield customers worldwide.',
                },
                metaKeywords: {
                  value: '',
                },
                openGraphDescription: {
                  value: '',
                },
                openGraphImage: {
                  value: {},
                },
                openGraphTitle: {
                  value: '',
                },
                openGraphType: {
                  value: '',
                },
                openGraphUrl: {
                  value: '',
                },
                contentTag: {
                  id: '97803e00-415e-418e-bd59-ec82dc5f73d8',
                  url: '/en-US/Data/System/Content-Tags/Standard',
                  name: 'Standard',
                  displayName: 'Standard',
                  fields: {
                    tag: {
                      value: 'Standard',
                    },
                  },
                },
                cardImage: {
                  value: {},
                },
                cardimagecropregion: {
                  value: '',
                },
                headline: {
                  value: 'Brands',
                },
                pageImage: {
                  value: {},
                },
                pageimagecropregion: {
                  value: '',
                },
                pageTitle: {
                  value: 'Brands',
                },
                searchResultText: {
                  value: '',
                },
                subheading: {
                  value:
                    '<p>With a combined history dating back more than 175 years, our brands are backed by individual legacies of trust, reliability, and performance.</p>',
                },
                mobileMenuTitle: {
                  value: 'Brands',
                },
                submenuText: {
                  value: '',
                },
                hideFromSearch: {
                  value: false,
                },
                hideInFooterNavigation: {
                  value: false,
                },
                menuTitle: {
                  value: 'Brands',
                },
                hideInNavigation: {
                  value: false,
                },
                hideInSecondaryNavigation: {
                  value: false,
                },
                featuredStoryAbstract: {
                  value: '',
                },
                featuredStoryCtaText: {
                  value: 'Brands',
                },
                featuredStoryHeadline: {
                  value: 'Brands',
                },
                featuredStorySubItemLink: {
                  value: '',
                },
                author: {
                  value: 'sitecore\\ashwin',
                },
                publishDate: {
                  value: '2018-10-15T00:00:00Z',
                },
                Content: {
                  value: '',
                },
                Title: {
                  value: '',
                },
                date: {
                  value: '0001-01-01T00:00:00Z',
                },
                NavigationFilter: [],
                NavigationClass: null,
                NavigationTitle: {
                  value: '',
                },
                SxaTags: [],
                'Page Design': null,
              },
            },
          ],
          imageCropRegion: {
            value: '',
          },
          image: {
            value: {},
          },
          backgroundVideo: {
            value: '',
          },
        },
      },
    ],
    searchPlaceholderText: {
      value: 'What products can we help you find?',
    },
    trendingText: {
      value: 'Trending',
    },
    trendingSearchKeywords: {
      value: 'Category 01\r\nCategory 02\r\nCategory 03\r\nCategory 04',
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
