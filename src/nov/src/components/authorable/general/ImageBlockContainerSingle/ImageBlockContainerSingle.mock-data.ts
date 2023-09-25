// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData = {
  uid: '97d5e8d6-0028-43a5-8627-00863c14e5c3',
  componentName: 'ImageBlockContainerSingle',
  dataSource: '',
  params: {
    CacheClearingBehavior: 'Clear on publish',
  },
  placeholders: {
    'image-block-main': [
      {
        uid: '3ecd6d27-3547-412c-b372-1059865d4cb3',
        componentName: 'ImageVideoBlock1920x1080',
        dataSource: '{534C3BEA-F17A-46EC-916E-941C0B1DCCE3}',
        fields: {
          linkurl: {
            value: {
              href: '',
            },
          },
          image: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Stories/Keeping-Water-in-its-Place/Keeping-Water-in-its-Place-Animation-Cover.jpg?h=1080&iar=0&w=1920',
              alt: 'A still from an animation demonstrating the resilience of the Seabox Water Treatment System',
              width: '1920',
              height: '1080',
            },
          },
          imageCropRegion: {
            value: '',
          },
          video: {
            value: 'https://s3-us-west-2.amazonaws.com/caps.main/seabox/SeaBox_Timelapse4.mp4',
          },
          headline: {
            value: '',
          },
        },
      },
    ],
  },
};

export const noData = {
  render: {},
  params: [],
};

export default defaultData;
