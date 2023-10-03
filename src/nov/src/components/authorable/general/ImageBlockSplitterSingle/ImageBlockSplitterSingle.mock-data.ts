// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData = {
  uid: 'fa63ebd9-56f8-49b9-9d32-e02098c6bb37',
  componentName: 'ImageBlockSplitterSingle',
  dataSource: '',
  params: {
    CacheClearingBehavior: 'Clear on publish',
  },
  placeholders: {
    'image-block-splitter-960x1080-left': [
      {
        uid: 'ba1cafe8-1064-4805-b02d-f41133642a9e',
        componentName: 'ImageBlock960x1080',
        dataSource: '{7775EE40-2965-48D3-9DCB-8E546A8BC898}',
        fields: {
          linkurl: {
            value: {
              href: '',
            },
          },
          imageCropRegion: {
            value: '',
          },
          image: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/About/NOV-Today-Podcast/Episode-16-Not-Your-Average-Garden-Hose-Part-3/Closeup-of-Silver-pipe.jpg?h=1080&iar=0&w=960',
              alt: 'Closeup of Silver pipe',
              width: '960',
              height: '1080',
            },
          },
          headline: {
            value: '',
          },
        },
      },
    ],
    'image-block-splitter-960x1080-right': [
      {
        uid: '1ddac428-311a-44f8-9d42-2c74b0bd1e2c',
        componentName: 'ImageBlock960x1080',
        dataSource: '{9EDBCC03-8682-40F5-A5E2-C7DABFC24266}',
        fields: {
          linkurl: {
            value: {
              href: '',
            },
          },
          imageCropRegion: {
            value: '',
          },
          image: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/About/NOV-Today-Podcast/Episode-16-Not-Your-Average-Garden-Hose-Part-3/Man-touching-controls.jpg?h=1080&iar=0&w=960',
              alt: 'Man touching controls',
              width: '960',
              height: '1080',
            },
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
