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
            value: 'David Pinchin',
          },
          bio: {
            value:
              '<p>David Pinchin has 35 years of oil industry experience working mainly within the field of water treatment. The first of his seven patents connected to the treatment of water on the seabed was awarded in 2003. The treatment system has now successfully undergone several stages of full-scale pilot testing and qualification programs</p>',
          },
          jobTitle: {
            value: 'Technology Manager',
          },
          image: {
            value: {
              src: 'https://www.nov.com/-/media/nov/images/stories/keeping-water-in-its-place/keeping-water-in-its-place-david-pinchin.jpg?h=96&w=96&cropregion=0,0,200,200&hash=0893851A2A4A3513961BAD4778F1D9A0',
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
              '<p>Torbjørn Hegdal holds a master’s degree in petroleum engineering from University of Technology in Norway and an MBA from Norwegian Business School. He has 25 years of experience in the oil and gas industry—primarily with Shell International, Enterprise Oil, and other companies—and has held various asset and business unit management positions.</p>',
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
