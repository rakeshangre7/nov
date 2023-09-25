// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData = {
  uid: 'ba1cafe8-1064-4805-b02d-f41133642a9e',
  componentName: 'ImageBlock',
  fields: {
    linkurl: {
      value: {
        href: '/',
        text: 'Test Link',
      },
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
      value: 'Test Headline left',
    },
  },
};

export const noData = {
  render: {},
  params: [],
};

export default defaultData;
