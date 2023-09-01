import { ContentSliderProps } from './ContentSlider';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentSliderProps = {
  rendering: { componentName: 'ContentSlider' },
  params: {},
  fields: {
    slides: [
      {
        id: '6b6b39a4-12a8-4db2-b135-0eff1a8a3628',
        url: '/en-US/Data/System/Default-Templates-Content/G1-Content-Slider/Slide-1',
        name: 'Slide 1',
        displayName: 'Slide 1',
        fields: {
          headline: {
            value: 'Connection performance without compromise',
          },
          businessSegment: {
            id: 'aba9e56c-0fce-464d-8e09-db375cdf20d8',
            url: '/en-US/Data/System/Business-Segments-Folder/Completion-and-Production-Solutions',
            name: 'Completion and Production Solutions',
            displayName: 'Completion and Production Solutions',
            fields: {
              businessSegmentName: {
                value: 'Completion & Production Solutions',
              },
              businessUnits: [
                {
                  id: 'c49dea2c-8589-4331-b6d2-7f7accbdc845',
                  url: '/en-US/Data/System/Business-Units-Folder/Completion-Tools',
                  name: 'Completion Tools',
                  displayName: 'Completion Tools',
                  fields: {
                    businessUnitName: {
                      value: 'Completion Tools',
                    },
                  },
                },
                {
                  id: '29187dda-196a-4deb-afed-f6b08921a5c3',
                  url: '/en-US/Data/System/Business-Units-Folder/Fiber-Glass-Systems',
                  name: 'Fiber Glass Systems',
                  displayName: 'Fiber Glass Systems',
                  fields: {
                    businessUnitName: {
                      value: 'Fiber Glass Systems',
                    },
                  },
                },
                {
                  id: '1231141f-f298-461d-a4a3-de547750db36',
                  url: '/en-US/Data/System/Business-Units-Folder/Intervention-and-Stimulation-Equipment',
                  name: 'Intervention and Stimulation Equipment',
                  displayName: 'Intervention and Stimulation Equipment',
                  fields: {
                    businessUnitName: {
                      value: 'Intervention and Stimulation Equipment',
                    },
                  },
                },
                {
                  id: '0690bf20-2098-4102-807f-40aadb887c56',
                  url: '/en-US/Data/System/Business-Units-Folder/Pole-Products',
                  name: 'Pole Products',
                  displayName: 'Pole Products',
                  fields: {
                    businessUnitName: {
                      value: 'Pole Products',
                    },
                  },
                },
                {
                  id: '609c7fc7-1ede-4c71-ad49-e65f4e7314de',
                  url: '/en-US/Data/System/Business-Units-Folder/Process-and-Flow-Technologies',
                  name: 'Process and Flow Technologies',
                  displayName: 'Process and Flow Technologies',
                  fields: {
                    businessUnitName: {
                      value: 'Process and Flow Technologies',
                    },
                  },
                },
                {
                  id: '7ee1ade9-0d99-4caf-a0ca-1ecf6a8f0300',
                  url: '/en-US/Data/System/Business-Units-Folder/Subsea-Production-Systems',
                  name: 'Subsea Production Systems',
                  displayName: 'Subsea Production Systems',
                  fields: {
                    businessUnitName: {
                      value: 'Subsea Production Systems',
                    },
                  },
                },
                {
                  id: '302425a4-ae7d-4b4b-b0aa-719b352fa512',
                  url: '/en-US/Data/System/Business-Units-Folder/XL-Systems',
                  name: 'XL Systems',
                  displayName: 'XL Systems',
                  fields: {
                    businessUnitName: {
                      value: 'XL Systems',
                    },
                  },
                },
              ],
            },
          },
          squareImage: {
            value: {
              src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/System/NOV/Default-Rendering-Content/Images/2015EldridgePressureControlGroup9414edited.jpg?h=1080&iar=0&w=1280',
              alt: 'Blue rods and yellow background',
              width: '1280',
              height: '1080',
            },
          },
          squareImageCropRegion: {
            value: '',
          },
          tallImage: {
            value: {},
          },
          tallImageCropRegion: {
            value: '',
          },
          video: {
            value:
              'https://nov-web.s3.ca-central-1.amazonaws.com/Energy+Transition/Nov+Industries+Hero+Banner-1.mp4',
          },
          cta: {
            value: {
              text: '',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '|Custom',
              querystring: '',
              id: '{447B01DE-B691-4983-B4A7-1E03DFF32250}',
              href: '/',
            },
          },
          quote: {
            value: 'fewer turns necessary from stab to makeup',
          },
          metric: {
            value: '50%',
          },
        },
      },
      {
        id: '8b2e649c-d7d2-497c-8e64-38f0c632e50d',
        url: '/en-US/Data/System/Default-Templates-Content/G1-Content-Slider/Slide-2',
        name: 'Slide 2',
        displayName: 'Slide 2',
        fields: {
          headline: {
            value: 'Connection performance without compromise',
          },
          businessSegment: {
            id: '7bfdf55b-d789-4f80-baa1-ee7b8380d4c6',
            url: '/en-US/Data/System/Business-Segments-Folder/Rig-Technologies',
            name: 'Rig Technologies',
            displayName: 'Rig Technologies',
            fields: {
              businessSegmentName: {
                value: 'Rig Technologies',
              },
              businessUnits: [
                {
                  id: '51b1abbb-48d9-4fb3-94ab-7103479664ef',
                  url: '/en-US/Data/System/Business-Units-Folder/Rig-Equipment',
                  name: 'Rig Equipment',
                  displayName: 'Rig Equipment',
                  fields: {
                    businessUnitName: {
                      value: 'Rig Equipment',
                    },
                  },
                },
                {
                  id: '367b717a-53a6-42d9-9cdb-9430cb28988d',
                  url: '/en-US/Data/System/Business-Units-Folder/Aftermarket-Operations',
                  name: 'Aftermarket Operations',
                  displayName: 'Aftermarket Operations',
                  fields: {
                    businessUnitName: {
                      value: 'Aftermarket Operations',
                    },
                  },
                },
                {
                  id: '55081714-900d-4f84-a923-2c7cdc829502',
                  url: '/en-US/Data/System/Business-Units-Folder/Marine-and-Construction',
                  name: 'Marine and Construction',
                  displayName: 'Marine and Construction',
                  fields: {
                    businessUnitName: {
                      value: 'Marine and Construction',
                    },
                  },
                },
              ],
            },
          },
          squareImage: {
            value: {},
          },
          squareImageCropRegion: {
            value: '',
          },
          tallImage: {
            value: {},
          },
          tallImageCropRegion: {
            value: '',
          },
          video: {
            value: '',
          },
          cta: {
            value: {
              text: '',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '|Custom',
              querystring: '',
              id: '{784DD9E8-C40D-47F4-ACCF-893251B02EB3}',
              href: '/About',
            },
          },
          quote: {
            value: 'fewer turns necessary from stab to makeup',
          },
          metric: {
            value: '60%',
          },
        },
      },
      {
        id: '95308d89-ec8f-4af0-a17a-eb725e052128',
        url: '/en-US/Data/System/Default-Templates-Content/G1-Content-Slider/Slide-3',
        name: 'Slide 3',
        displayName: 'Slide 3',
        fields: {
          headline: {
            value: 'Lorem ipsum dolor sit amet consectetur adipiscing',
          },
          businessSegment: {
            id: '3a98fb5b-55bc-4332-a107-34a543ac1970',
            url: '/en-US/Data/System/Business-Segments-Folder/Wellbore-Technologies',
            name: 'Wellbore Technologies',
            displayName: 'Wellbore Technologies',
            fields: {
              businessSegmentName: {
                value: 'Wellbore Technologies',
              },
              businessUnits: [
                {
                  id: 'c3f50361-57c6-4b63-a3cb-366918af3454',
                  url: '/en-US/Data/System/Business-Units-Folder/Directional-Drilling-Technologies',
                  name: 'Directional Drilling Technologies',
                  displayName: 'Directional Drilling Technologies',
                  fields: {
                    businessUnitName: {
                      value: 'Directional Drilling Technologies',
                    },
                  },
                },
                {
                  id: '8b474b92-9d93-442b-b8ab-6ffffca5d53d',
                  url: '/en-US/Data/System/Business-Units-Folder/Downhole',
                  name: 'Downhole',
                  displayName: 'Downhole',
                  fields: {
                    businessUnitName: {
                      value: 'Downhole',
                    },
                  },
                },
                {
                  id: '099ceb42-8fef-4928-bca7-b54b6308014f',
                  url: '/en-US/Data/System/Business-Units-Folder/IntelliServ',
                  name: 'IntelliServ',
                  displayName: 'IntelliServ',
                  fields: {
                    businessUnitName: {
                      value: 'IntelliServ',
                    },
                  },
                },
                {
                  id: 'de0d2a2c-b624-4949-8297-298f718c11f7',
                  url: '/en-US/Data/System/Business-Units-Folder/Grant-Prideco',
                  name: 'Grant Prideco',
                  displayName: 'Grant Prideco',
                  fields: {
                    businessUnitName: {
                      value: 'Grant Prideco',
                    },
                  },
                },
                {
                  id: '36e05f0f-4a45-457d-bc3a-970c6a3667df',
                  url: '/en-US/Data/System/Business-Units-Folder/MD-Totco',
                  name: 'MD Totco',
                  displayName: 'MD Totco',
                  fields: {
                    businessUnitName: {
                      value: 'M/D Totco',
                    },
                  },
                },
                {
                  id: '0c44bcb4-a6a1-41fd-ab80-08db189b3a0d',
                  url: '/en-US/Data/System/Business-Units-Folder/ReedHycalog',
                  name: 'ReedHycalog',
                  displayName: 'ReedHycalog',
                  fields: {
                    businessUnitName: {
                      value: 'ReedHycalog',
                    },
                  },
                },
                {
                  id: '3b8f9886-cbf9-4610-8636-0d4db6dfd4be',
                  url: '/en-US/Data/System/Business-Units-Folder/Tuboscope',
                  name: 'Tuboscope',
                  displayName: 'Tuboscope',
                  fields: {
                    businessUnitName: {
                      value: 'Tuboscope',
                    },
                  },
                },
                {
                  id: '15445e55-9767-44f6-a00f-6e5448665edb',
                  url: '/en-US/Data/System/Business-Units-Folder/WellSite-Services',
                  name: 'WellSite Services',
                  displayName: 'WellSite Services',
                  fields: {
                    businessUnitName: {
                      value: 'WellSite Services',
                    },
                  },
                },
              ],
            },
          },
          squareImage: {
            value: {},
          },
          squareImageCropRegion: {
            value: '',
          },
          tallImage: {
            value: {},
          },
          tallImageCropRegion: {
            value: '',
          },
          video: {
            value: '',
          },
          cta: {
            value: {
              text: '',
              anchor: '',
              linktype: 'internal',
              class: '',
              title: '',
              target: '|Custom',
              querystring: '',
              id: '{499BA885-4BFF-484A-98DB-08E7F6867CB1}',
              href: '/Careers',
            },
          },
          quote: {
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          metric: {
            value: '75%',
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
