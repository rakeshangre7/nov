import { ContentBlockTextProps } from './ContentBlockText';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentBlockTextProps = {
  uid: '3c458e69-81ab-4de6-aaab-861759056040',
  componentName: 'ContentBlockText',
  dataSource: '{3B4BD222-BACD-441F-A712-E4F8FA05E45A}',
  params: {
    Alignment: 'left',
    backgroundColor: 'gray',
  },
  fields: {
    body: {
      value:
        '<p>We are a global family of thousands of individuals, working as one team to create a lasting impact for ourselves, our customers, and the communities where we live and work. We take responsibility for each other and our company&rsquo;s future, knowing that personal ownership leads to broader success.</p>',
    },
    cta: {
      value: {
        href: '',
      },
    },
    heading: {
      value: 'Global Family',
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
export const rightData: ContentBlockTextProps = {
  uid: '3c458e69-81ab-4de6-aaab-861759056040',
  componentName: 'ContentBlockText',
  dataSource: '{3B4BD222-BACD-441F-A712-E4F8FA05E45A}',
  params: {
    Alignment: 'right',
    backgroundColor: 'red',
  },
  fields: {
    body: {
      value:
        '<p>We are a global family of <a href="https://www.texaschildrens.org/departments/cancer-and-hematology-center">Texas Children’s Cancer and Hematology Center  </a> thousands of individuals, working as one team to create a lasting impact for ourselves, our customers, and the communities where we live and work. We take responsibility for each other and our company&rsquo;s future, knowing that personal ownership leads to broader success.</p>',
    },
    cta: {
      value: {
        href: '',
      },
    },
    heading: {
      value: 'Global Family',
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
