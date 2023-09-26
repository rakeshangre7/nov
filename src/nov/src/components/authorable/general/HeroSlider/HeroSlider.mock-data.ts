import { HeroSliderProps } from './HeroSlider';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: HeroSliderProps = {
  uid: '3a1f5ecb-aa04-4611-8577-bfbde8784360',
  componentName: 'HeroSlider',
  dataSource: '{3E75C232-A3C2-498A-9AD4-A762CA23BFB8}',
  params: {
    enableAutoplay: 'true',
    addGradient: '1',
    textColor: 'white-ffffff',
    waitTime: '5000',
  },

  fields: {
    data: {
      datasource: {
        contentTag: {
          jsonValue: {
            id: '894ad693-62bc-4d0f-8e34-42401ebef1f3',
            url: '/Data/System/Content-Tags/Capability',
            name: 'Capability',
            displayName: 'Capability',
            fields: {
              tag: {
                value: 'Capability',
              },
            },
          },
        },
        staticHeading: {
          jsonValue: {
            value: 'Midstream',
          },
        },
        staticSubheading: {
          jsonValue: {
            value: '<p>Trusted brands that keep pace with your demands.</p>',
          },
        },
        contactLink: {
          jsonValue: {
            value: {
              href: '',
            },
          },
        },
      },
    },
  },
  placeholders: {
    'hero-slide': [
      {
        uid: '6b9ae88d-b4de-485f-9af7-0fb1b1e14400',
        componentName: 'Hero',
        dataSource: '{9A2ACA87-9263-4EB8-9787-426BED059AD9}',
        params: {
          addGradient: '1',
          textColor: 'white-ffffff',
        },
        fields: {
          data: {
            datasource: {
              contentTag: {
                jsonValue: null,
              },
              heading: {
                jsonValue: {
                  value: '',
                },
              },
              subheading: {
                jsonValue: {
                  value: '',
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '',
                  },
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Careers/Careers-diverse-workers-conference.JPG?h=295&iar=0&w=514',
                    alt: 'NOV employees gather around a conference table',
                    width: '514',
                    height: '295',
                  },
                },
              },
              backgroundVideo: {
                jsonValue: {
                  value: '',
                },
              },
            },
            contextItem: {
              contentTag: {
                jsonValue: {
                  id: '894ad693-62bc-4d0f-8e34-42401ebef1f3',
                  url: '/Data/System/Content-Tags/Capability',
                  name: 'Capability',
                  displayName: 'Capability',
                  fields: {
                    tag: {
                      value: 'Capability',
                    },
                  },
                },
              },
              heading: {
                jsonValue: {
                  value: 'Midstream',
                },
              },
              subheading: {
                jsonValue: {
                  value: '<p>Trusted brands that keep pace with your demands.</p>',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/ZapLokMountainsInstall.jpg?h=1080&iar=0&w=1920',
                    alt: 'Zap Lok equipment installed in the mountains',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
            },
          },
        },
      },
      {
        uid: 'e7bdced1-ba2b-4764-91f2-d9a68e7a9238',
        componentName: 'Hero',
        dataSource: '{A9A0AC95-DF68-4D4A-B04A-3AADD4D7B1FA}',
        params: {
          addGradient: '1',
          textColor: 'white-ffffff',
        },
        fields: {
          data: {
            datasource: {
              contentTag: {
                jsonValue: null,
              },
              heading: {
                jsonValue: {
                  value: '',
                },
              },
              subheading: {
                jsonValue: {
                  value: '',
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '',
                  },
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Careers/Careers-diverse-workers-conference.JPG?h=1080&iar=0&w=1920',
                    alt: 'NOV employees gather around a conference table',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
              backgroundVideo: {
                jsonValue: {
                  value: '',
                },
              },
            },
            contextItem: {
              contentTag: {
                jsonValue: {
                  id: '894ad693-62bc-4d0f-8e34-42401ebef1f3',
                  url: '/Data/System/Content-Tags/Capability',
                  name: 'Capability',
                  displayName: 'Capability',
                  fields: {
                    tag: {
                      value: 'Capability',
                    },
                  },
                },
              },
              heading: {
                jsonValue: {
                  value: 'Midstream',
                },
              },
              subheading: {
                jsonValue: {
                  value: '<p>Trusted brands that keep pace with your demands.</p>',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/ZapLokMountainsInstall.jpg?h=1080&iar=0&w=1920',
                    alt: 'Zap Lok equipment installed in the mountains',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
            },
          },
        },
      },
      {
        uid: '6ca963b8-97d8-4745-b8b7-937c31649163',
        componentName: 'Hero',
        dataSource: '{950FBC00-2248-42D2-B5C9-26F53B9A8BF5}',
        params: {
          addGradient: '1',
          textColor: 'black-000000',
        },
        fields: {
          data: {
            datasource: {
              contentTag: {
                jsonValue: null,
              },
              heading: {
                jsonValue: {
                  value: '',
                },
              },
              subheading: {
                jsonValue: {
                  value: '',
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '',
                  },
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/ZapLokMountainsInstall.jpg?h=1080&iar=0&w=1920',
                    alt: 'Zap Lok equipment installed in the mountains',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
              backgroundVideo: {
                jsonValue: {
                  value: '',
                },
              },
            },
            contextItem: {
              contentTag: {
                jsonValue: {
                  id: '894ad693-62bc-4d0f-8e34-42401ebef1f3',
                  url: '/Data/System/Content-Tags/Capability',
                  name: 'Capability',
                  displayName: 'Capability',
                  fields: {
                    tag: {
                      value: 'Capability',
                    },
                  },
                },
              },
              heading: {
                jsonValue: {
                  value: 'Midstream',
                },
              },
              subheading: {
                jsonValue: {
                  value: '<p>Trusted brands that keep pace with your demands.</p>',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/ZapLokMountainsInstall.jpg?h=1080&iar=0&w=1920',
                    alt: 'Zap Lok equipment installed in the mountains',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
            },
          },
        },
      },
      {
        uid: '1978f963-1468-4abc-9204-0e055bb2fc6a',
        componentName: 'Hero',
        dataSource: '{B9E4A9EE-378A-45F0-9B87-093BC7D18BB2}',
        params: {
          addGradient: '1',
          textColor: 'black-000000',
        },
        fields: {
          data: {
            datasource: {
              contentTag: {
                jsonValue: null,
              },
              heading: {
                jsonValue: {
                  value: '',
                },
              },
              subheading: {
                jsonValue: {
                  value: '',
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '',
                  },
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/Midstream-FGS-pipeline.jpg?h=1080&iar=0&w=1920',
                    alt: 'Midstream FGS pipeline',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
              backgroundVideo: {
                jsonValue: {
                  value: '',
                },
              },
            },
            contextItem: {
              contentTag: {
                jsonValue: {
                  id: '894ad693-62bc-4d0f-8e34-42401ebef1f3',
                  url: '/Data/System/Content-Tags/Capability',
                  name: 'Capability',
                  displayName: 'Capability',
                  fields: {
                    tag: {
                      value: 'Capability',
                    },
                  },
                },
              },
              heading: {
                jsonValue: {
                  value: 'Midstream',
                },
              },
              subheading: {
                jsonValue: {
                  value: '<p>Trusted brands that keep pace with your demands.</p>',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/ZapLokMountainsInstall.jpg?h=1080&iar=0&w=1920',
                    alt: 'Zap Lok equipment installed in the mountains',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
            },
          },
        },
      },
      {
        uid: 'e29a2602-1bc1-4c27-ab01-a7e060957802',
        componentName: 'Hero',
        dataSource: '{E571B04B-458E-4062-8556-2BF3052B6238}',
        params: {
          addGradient: '1',
          textColor: 'black-000000',
        },
        fields: {
          data: {
            datasource: {
              contentTag: {
                jsonValue: null,
              },
              heading: {
                jsonValue: {
                  value: '',
                },
              },
              subheading: {
                jsonValue: {
                  value: '',
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '',
                  },
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/Midstream-TK-Coatings.jpg?h=1080&iar=0&w=1920',
                    alt: 'Midstream TK Coatings',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
              backgroundVideo: {
                jsonValue: {
                  value: '',
                },
              },
            },
            contextItem: {
              contentTag: {
                jsonValue: {
                  id: '894ad693-62bc-4d0f-8e34-42401ebef1f3',
                  url: '/Data/System/Content-Tags/Capability',
                  name: 'Capability',
                  displayName: 'Capability',
                  fields: {
                    tag: {
                      value: 'Capability',
                    },
                  },
                },
              },
              heading: {
                jsonValue: {
                  value: 'Midstream',
                },
              },
              subheading: {
                jsonValue: {
                  value: '<p>Trusted brands that keep pace with your demands.</p>',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/ZapLokMountainsInstall.jpg?h=1080&iar=0&w=1920',
                    alt: 'Zap Lok equipment installed in the mountains',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
            },
          },
        },
      },
      {
        uid: 'ab086db4-5a8f-4747-abd6-d1be08ba7557',
        componentName: 'Hero',
        dataSource: '{97D07D5F-0F59-4A49-BF9A-3BBBE9E0DE44}',
        params: {
          addGradient: '1',
          textColor: 'black-000000',
        },
        fields: {
          data: {
            datasource: {
              contentTag: {
                jsonValue: null,
              },
              heading: {
                jsonValue: {
                  value: '',
                },
              },
              subheading: {
                jsonValue: {
                  value: '',
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '',
                  },
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/Midstream-PFT-Wellstream.jpg?h=1080&iar=0&w=1920',
                    alt: 'Midstream PFT Wellstream',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
              backgroundVideo: {
                jsonValue: {
                  value: '',
                },
              },
            },
            contextItem: {
              contentTag: {
                jsonValue: {
                  id: '894ad693-62bc-4d0f-8e34-42401ebef1f3',
                  url: '/Data/System/Content-Tags/Capability',
                  name: 'Capability',
                  displayName: 'Capability',
                  fields: {
                    tag: {
                      value: 'Capability',
                    },
                  },
                },
              },
              heading: {
                jsonValue: {
                  value: 'Midstream',
                },
              },
              subheading: {
                jsonValue: {
                  value: '<p>Trusted brands that keep pace with your demands.</p>',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/ZapLokMountainsInstall.jpg?h=1080&iar=0&w=1920',
                    alt: 'Zap Lok equipment installed in the mountains',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
            },
          },
        },
      },
      {
        uid: '0d4e72bb-3e8f-4589-8cfd-5f69044f5e88',
        componentName: 'Hero',
        dataSource: '{1514ABE2-BA5E-429B-BB5F-A8A610A8E35A}',
        params: {
          addGradient: '1',
          textColor: 'black-000000',
        },
        fields: {
          data: {
            datasource: {
              contentTag: {
                jsonValue: null,
              },
              heading: {
                jsonValue: {
                  value: '',
                },
              },
              subheading: {
                jsonValue: {
                  value: '',
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '',
                  },
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Careers/Careers-diverse-workers-conference.JPG?h=1080&iar=0&w=1920',
                    alt: 'NOV employees gather around a conference table',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
              backgroundVideo: {
                jsonValue: {
                  value: '',
                },
              },
            },
            contextItem: {
              contentTag: {
                jsonValue: {
                  id: '894ad693-62bc-4d0f-8e34-42401ebef1f3',
                  url: '/Data/System/Content-Tags/Capability',
                  name: 'Capability',
                  displayName: 'Capability',
                  fields: {
                    tag: {
                      value: 'Capability',
                    },
                  },
                },
              },
              heading: {
                jsonValue: {
                  value: 'Midstream',
                },
              },
              subheading: {
                jsonValue: {
                  value: '<p>Trusted brands that keep pace with your demands.</p>',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Capability/Pipeline/ZapLokMountainsInstall.jpg?h=1080&iar=0&w=1920',
                    alt: 'Zap Lok equipment installed in the mountains',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
            },
          },
        },
      },
    ],
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
