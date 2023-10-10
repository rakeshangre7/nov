import { ProductHeroSliderProps } from './ProductHeroSlider';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ProductHeroSliderProps = {
  uid: '3a1f5ecb-aa04-4611-8577-bfbde8784360',
  componentName: 'ProductHeroSlider',
  dataSource: '{3E75C232-A3C2-498A-9AD4-A762CA23BFB8}',
  params: {
    enableAutoplay: 'true',
    displayMode: 'product image',
    textColor: 'black',
    duration: '300',
    waitTime: '5000',
  },

  fields: {
    data: {
      datasource: {
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
            value: 'Static B6 header',
          },
        },
        subheading: {
          jsonValue: {
            value: '<p>A static subheading for B6</p>',
          },
        },
        cta: {
          jsonValue: {
            value: {
              href: '#contactus',
              text: 'Have a question? Contact us.',
              linktype: 'anchor',
              url: 'contactus',
              anchor: 'contactus',
              title: '',
              class: '',
            },
          },
        },
        models: {
          targetItems: [
            {
              name: 'Compensated Coiled Tubing Lift Frame 2',
              url: {
                url: 'https://xmc-nationaloile493-nov-dev.sitecorecloud.io/TestHztl2/Compensated-Coiled-Tubing-Lift-Frame-2',
              },
              id: '798A2EBF9ADC4219BE15B0474AE93FA1',
            },
            {
              name: 'Compensated Coiled Tubing Lift Frame 3',
              url: {
                url: 'https://xmc-nationaloile493-nov-dev.sitecorecloud.io/TestHztl2/Compensated-Coiled-Tubing-Lift-Frame-3',
              },
              id: 'B08FE88C0F4A4C24ACA78F4AA2016D88',
            },
            {
              name: 'Compensated Coiled Tubing Lift Frame no data',
              url: {
                url: 'https://xmc-nationaloile493-nov-dev.sitecorecloud.io/TestHztl2/Compensated-Coiled-Tubing-Lift-Frame-no-data',
              },
              id: 'CBD9650BAF384B20B8A6CBAFE434CFB2',
            },
          ],
        },
      },
      contextItem: {
        id: '798A2EBF9ADC4219BE15B0474AE93FA1',
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
            value: 'Compensated Coiled Tubing Lift Frame',
          },
        },
        subheading: {
          jsonValue: {
            value:
              '<p>Supporting ultra-deepwater string weights and enhancing operational performance through innovative motion compensation</p>',
          },
        },
        image: {
          jsonValue: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Products/RIG/Rig-Equipment/Compensated-Coiled-Tubing-Lift-Frame/Compensated-Coiled-Tubing-Lift-Frame.jpg?h=1080&iar=0&w=1920',
              alt: 'Image of yellow compensated coiled tubing lift frame',
              width: '1920',
              height: '1080',
            },
          },
        },
      },
    },
  },
  placeholders: {
    'product-hero': [
      {
        uid: '5d92478f-2acd-4f6f-86ba-9ade748567d9',
        componentName: 'ProductHero',
        dataSource: '{05766D23-D3BC-44BF-A3EC-ACD94908E7AD}',
        fields: {
          data: {
            datasource: {
              contentTag: {
                jsonValue: null,
              },
              heading: {
                jsonValue: {
                  value: 'Offshore TorqueMaster™ Units',
                },
              },
              subheading: {
                jsonValue: {
                  value:
                    '<p>The 8045 &amp; 8026 TorqueMaster&trade; units are self-contained freestanding hydraulic powered units.</p>',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Products/CAPS/Process-and-Flow-Technologies/Horizontal-Surface-Pumping-System/Horizontal-Surface-Pumping-System.jpg?h=1080&iar=0&w=1920',
                    alt: 'Horizontal Surface Pumping System in the field',
                    width: '1920',
                    height: '1080',
                  },
                },
              },
              backgroundVideo: {
                jsonValue: {
                  value:
                    'https://nov-web.s3.ca-central-1.amazonaws.com/Energy+Transition/Nov+Industries+Hero+Banner-1.mp4',
                },
              },
            },
            contextItem: {
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Products/RIG/Rig-Equipment/Compensated-Coiled-Tubing-Lift-Frame/Compensated-Coiled-Tubing-Lift-Frame.jpg?h=1080&iar=0&w=1920',
                    alt: 'Image of yellow compensated coiled tubing lift frame',
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
        uid: 'eea5f6d2-3640-484b-8eab-a1b747675b1b',
        componentName: 'ProductHero',
        dataSource: '',
        fields: {
          data: {
            datasource: null,
            contextItem: {
              image: {
                jsonValue: {
                  value: {
                    src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Images/Products/RIG/Rig-Equipment/Compensated-Coiled-Tubing-Lift-Frame/Compensated-Coiled-Tubing-Lift-Frame.jpg?h=1080&iar=0&w=1920',
                    alt: 'Image of yellow compensated coiled tubing lift frame',
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
