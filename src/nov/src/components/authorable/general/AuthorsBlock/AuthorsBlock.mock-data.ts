import { AuthorsBlockProps } from './AuthorsBlock';

const defaultData: AuthorsBlockProps = {
  rendering: { componentName: 'AuthorsBlock' },
  params: {},
  fields: {
    heading: {
      value: 'Authors',
    },
    authors: [
      {
        id: '8e66fff6-3f80-4f0c-87cd-004f031ecd30',
        url: '/Data/Modules/Stories/Authors/Stephen-Ching-D7-Author-Block-Entry',
        name: 'Stephen Ching D7 Author Block Entry',
        displayName: 'Stephen Ching D7 Author Block Entry',
        fields: {
          authorName: {
            value: 'Stephen Ching',
          },
          bio: {
            value:
              '<p>Stephen Ching has over 25 years of experience in the business of delivering glass-reinforced epoxy piping to the marine and offshore industries. The <em>Pioneering Spirit</em> is one among many of such projects, and others include all large new-build FPSOs.</p>',
          },
          jobTitle: {
            value: 'Director of Global Market Business Development',
          },
          image: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/Stories/A-Lighter-Heart-for-a-Heavy-Lifter/A-Lighter-Heart-for-a-Heavy-Lifter-Stephen-Ching.jpg?h=96&iar=0&w=96',
              alt: 'NOV Employee Stephen Ching',
              width: '96',
              height: '96',
            },
          },
          imageCropRegion: {
            value: '',
          },
          linkURL: {
            value: {
              href: '',
            },
          },
        },
      },
      {
        id: '1cafbee8-cbbf-4dbe-b5dc-7e24916755c0',
        url: '/Data/Modules/Stories/Authors/Torbjorn-Hegdal-D7-Author-Block-Entry',
        name: 'Torbjorn Hegdal D7 Author Block Entry',
        displayName: 'Torbjorn Hegdal D7 Author Block Entry',
        fields: {
          authorName: {
            value: 'Torbjørn Hegdal',
          },
          bio: {
            value:
              '<p>Torbj&oslash;rn Hegdal holds a master&rsquo;s degree in petroleum engineering from University of Technology in Norway and an MBA from Norwegian Business School. He has 25 years of experience in the oil and gas industry&mdash;primarily with Shell International, Enterprise Oil, and other companies&mdash;and has held various asset and business unit management positions.</p>',
          },
          jobTitle: {
            value: 'Business Development Manager, Seabox',
          },
          image: {
            value: {},
          },
          imageCropRegion: {
            value: '',
          },
          linkURL: {
            value: {
              href: '',
            },
          },
        },
      },
    ],
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
