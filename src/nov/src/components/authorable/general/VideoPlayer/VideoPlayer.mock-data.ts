import { VideoPlayerProps } from './VideoPlayer';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: VideoPlayerProps = {
  uid: '3a1f5ecb-aa04-4611-8577-bfbde8784360',
  componentName: 'VideoPlayer',
  dataSource: '{3E75C232-A3C2-498A-9AD4-A762CA23BFB8}',
  params: {},
  fields: {
    videoURL: {
      value: 'https://www.youtube.com/watch?v=3Qx2cyQk5Zk',
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
