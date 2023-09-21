import { VideoPlayerSliderProps } from './VideoPlayerSlider';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: VideoPlayerSliderProps = {
  uid: '3a1f5ecb-aa04-4611-8577-bfbde8784360',
  componentName: 'VideoPlayerSlider',
  dataSource: '{3E75C232-A3C2-498A-9AD4-A762CA23BFB8}',
  params: {},
  placeholders: {
    'video-player-slider': [
      {
        uid: '5993eb89-85a8-45e8-ab6f-38e15c8dd0f7',
        componentName: 'VideoPlayerSlide',
        dataSource: '{8322E131-3219-4306-A47B-8DAF891057E6}',
        fields: {
          data: {
            item: {
              videoURL: {
                value: 'https://youtu.be/k9-q7QWspCw',
              },
            },
          },
        },
      },
      {
        uid: '3b53473d-0097-426b-97f9-1236c189261f',
        componentName: 'VideoPlayerSlide',
        dataSource: '{AB7E16DE-3D89-486C-BA6F-1A695F91512E}',
        fields: {
          data: {
            item: {
              videoURL: {
                value: 'https://www.youtube.com/watch?v=xcb2-OTIeIQ',
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
