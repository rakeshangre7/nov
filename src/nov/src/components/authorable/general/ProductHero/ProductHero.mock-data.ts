import { ProductHeroProps } from './ProductHero';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ProductHeroProps = {
  rendering: { componentName: 'ProductHero' },
  params: {
    addGradient: '1',
    textColor: 'white',
  },
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
        cta: null,
        image: {
          jsonValue: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Products/CAPS/Process-and-Flow-Technologies/Horizontal-Surface-Pumping-System/Horizontal-Surface-Pumping-System.jpg?h=1080&iar=0&w=1920',
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
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/About/Our-Company-Structure/CAPS/Pole-Products/Ameron-Poles-Clematis-evening.jpg?h=1080&iar=0&w=1920',
              alt: 'Ameron Poles in Clematis during the evening',
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
