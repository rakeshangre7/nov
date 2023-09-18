import { BlockQuoteProps } from './BlockQuote';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: BlockQuoteProps = {
  uid: '97344b92-7c95-4ac5-ba52-015b4e4b60a0',
  componentName: 'BlockQuote',
  dataSource: '{FB60F382-F281-49BC-B12F-0EB5591A74B1}',
  fields: {
    cta: {
      value: {
        href: '/',
        text: 'test',
      },
    },
    jobTitle: {
      value: 'Job Title',
    },
    quoteName: {
      value: 'First name, Last name',
    },
    quoteText: {
      value:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>',
    },
    backgroundVideo: {
      value:
        'https://nov-web.s3.ca-central-1.amazonaws.com/Energy+Transition/Nov+Industries+Hero+Banner-1.mp4',
    },
    imageCropRegion: {
      value: '',
    },
    image: {
      value: {
        src: 'https://dummyimage.com/385x385/000/000',
        width: '351',
        height: '351',
      },
    },
  },
};
export const rightData: BlockQuoteProps = {
  uid: '97344b92-7c95-4ac5-ba52-015b4e4b60a0',
  componentName: 'BlockQuote',
  dataSource: '{FB60F382-F281-49BC-B12F-0EB5591A74B1}',
  fields: {
    cta: {
      value: {
        href: '/',
        text: 'test',
      },
    },
    jobTitle: {
      value: 'Job Title',
    },
    quoteName: {
      value: 'First name, Last name',
    },
    quoteText: {
      value:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</p>',
    },
    backgroundVideo: {
      value: '',
    },
    imageCropRegion: {
      value: '',
    },
    image: {
      value: {},
    },
  },
};
export const noData = {
  render: {},
  params: [],
};

export default defaultData;
