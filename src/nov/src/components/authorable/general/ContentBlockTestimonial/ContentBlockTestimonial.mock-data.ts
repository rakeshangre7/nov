import { ContentBlockTestimonialProps } from './ContentBlockTestimonial';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentBlockTestimonialProps = {
  componentName: 'ContentBlockTestimonial',
  params: {
    alignment: 'left',
    backgroundColor: 'gray-C6C6C6',
  },
  fields: {
    cta: {
      value: {
        text: 'TEst Link',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        querystring: '',
        id: '{784DD9E8-C40D-47F4-ACCF-893251B02EB3}',
        href: '/About',
      },
    },
    fullName: {
      value: 'First Name Last Name',
    },
    jobTitle: {
      value: 'Job Title | Location',
    },
    testimonial: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
    },
    image: {
      value: {
        src: 'https://xmc-nationaloile493-nov-dev.sitecorecloud.io/-/media/Project/nov/385x385.png?h=385&iar=0&w=385&hash=DFD9F704FFB1B090F722F20F4F5E401B',
        alt: '',
        width: '385',
        height: '385',
      },
    },

    backgroundVideo: {
      value:
        'https://nov-web.s3.ca-central-1.amazonaws.com/Energy+Transition/Nov+Industries+Hero+Banner-1.mp4',
    },
  },
};

export const WithImageData: ContentBlockTestimonialProps = {
  // params: { alignment: 'right' },
  fields: {
    image: {
      value: {
        src: 'https://dummyimage.com/385X385/ffff00/000',
        alt: '',
        height: 385,
        width: 385,
      },
    },
    testimonial: {
      value: `"Once you're working with great people, sometimes the field or job you do is nothing compared to the relationships you're building."`,
    },
    fullName: {
      value: 'Broddrick Stringfellow',
    },
    jobTitle: {
      value: 'Supervisor II, DP',
    },
    cta: {
      value: {
        url: '',
        href: '/',
        text: 'Test Link',
        linkType: null,
      },
    },
    backgroundVideo: {
      value: '',
    },
  },
};

export const noData = {
  render: {},
  params: [],
};

export default defaultData;
