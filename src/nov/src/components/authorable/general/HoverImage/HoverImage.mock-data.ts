import { HoverImageProps } from './HoverImage';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: HoverImageProps = {
  fields: {
    hoverImages: [
      {
        headLine: {
          value: 'Products & Services',
        },
        body: {
          value:
            'Lorem ipsum Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Aenean euismod bibend um laoreet lorem ipsum dolor sit amet, consec tetur adipiscing elit enean',
        },
        image: {
          value: {
            src: 'https://xmcloudcm.localhost/-/media/Project/nov/nov/nov-red-and-grey-logo.svg?iar=0&hash=8677D9CF815DB83C860B1EEE7EC17BF8',
            alt: 'NOV',
            height: 550,
            width: 392.672,
          },
        },
        imageCropRegion: {
          value: '',
        },
        cta: {
          value: {
            href: 'https://xmcloudcm.localhost/',
            text: 'Learn more',
            linktype: 'internal',
            url: 'https://xmcloudcm.localhost/',
            anchor: '',
            target: '_new',
          },
        },
      },
      {
        headLine: {
          value: 'Stories',
        },
        body: {
          value:
            'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Aenean euismod bibend um laoreet lorem ipsum dolor sit amet, consec tetur adipiscing elit enean',
        },
        image: {
          value: {},
        },
        imageCropRegion: {
          value: '',
        },
        cta: {
          value: {
            href: 'https://xmcloudcm.localhost/',
            text: 'Learn more',
            linktype: 'internal',
            url: 'https://xmcloudcm.localhost/',
            anchor: '',
            target: '',
          },
        },
      },
      {
        headLine: {
          value: 'Careers',
        },
        body: {
          value:
            'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Aenean euismod bibend um laoreet lorem ipsum dolor sit amet, consec tetur adipiscing elit enean',
        },
        image: {
          value: {},
        },
        imageCropRegion: {
          value: '',
        },
        cta: {
          value: {
            href: 'https://xmcloudcm.localhost/',
            text: 'Learn more',
            linktype: 'internal',
            url: 'https://xmcloudcm.localhost/',
            anchor: '',
            target: '',
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
