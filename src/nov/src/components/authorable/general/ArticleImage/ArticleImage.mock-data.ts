import { ArticleImageProps } from './ArticleImage';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ArticleImageProps = {
  uid: '58a97c87-1b98-4150-a94d-0495bb58f431',
  componentName: 'ArticleImage',
  dataSource: '{B960B6A0-2BBB-4C28-9D96-27C74AA9B4A4}',
  fields: {
    credit: {
      value: 'test credit',
    },
    caption: {
      value: 'this is cation for article image',
    },
    image: {
      value: {
        // src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Careers/Careers-diverse-workers-conference.JPG?h=295&iar=0&w=514',
        src: 'https://dummyimage.com/800x450/000/fff',
        alt: 'NOV employees gather around a conference table',
        width: '514',
        height: '295',
      },
    },
    imageCropRegion: {
      value: '',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
