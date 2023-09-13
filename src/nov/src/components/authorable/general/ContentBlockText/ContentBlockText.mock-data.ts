import { ContentBlockTextProps } from './ContentBlockText';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ContentBlockTextProps = {
  uid: '3c458e69-81ab-4de6-aaab-861759056040',
  componentName: 'ContentBlockText',
  dataSource: '{3B4BD222-BACD-441F-A712-E4F8FA05E45A}',
  params: {
    Alignment: 'left',
    backgroundColor: 'gray',
  },
  fields: {
    body: {
      value:
        '<p>We are a global family of thousands of individuals, working as one team to create a lasting impact for ourselves, our customers, and the communities where we live and work. We take responsibility for each other and our company&rsquo;s future, knowing that personal ownership leads to broader success.</p>',
    },
    cta: {
      value: {
        href: '',
      },
    },
    heading: {
      value: 'Global Family',
    },
    backgroundVideo: {
      value: '',
    },
    imageCropRegion: {
      value: '',
    },
    image: {
      value: {
        src: 'https://www.nov.com/-/media/nov/images/about/sustainability/social-acheivements-1-square.jpg?h=385&la=en-us&w=385&cropregion=0,0,1344,1344&hash=33DFC01B0021558AF0EF3C8432FDE6D1',
        width: '385',
        height: '385',
      },
    },
  },
};
export const rightData: ContentBlockTextProps = {
  uid: '3c458e69-81ab-4de6-aaab-861759056040',
  componentName: 'ContentBlockText',
  dataSource: '{3B4BD222-BACD-441F-A712-E4F8FA05E45A}',
  params: {
    Alignment: 'right',
    backgroundColor: 'red',
  },
  fields: {
    body: {
      value:
        '<p>We are a global family of thousands of individuals, working as one team to create a lasting impact for ourselves, our customers, and the communities where we live and work. We take responsibility for each other and our company&rsquo;s future, knowing that personal ownership leads to broader success.</p>\n<ul>\n    <li>Completed 172 NOV globally standardized Health, Safety and Environmental Management audits in addition to local facility-level audits.</li>\n    <li>Installed In-Vehicle Monitoring Systems on 90% of company vehicles to help reduce driving-related risks and liability.</li>\n    <li>Continued to lower Lost Time Incidence Rate (LTIR) for 4th year in a row.</li>\n    <li>Partnered with the Oil &amp; Gas Trafficking Awareness Group to call attention to how, as an industry, we can management and mitigate modern slavery and human trafficking risks across the supply chain.</li>\n    <li>Continued to expand monetary and in-kind donations, including employee volunteer hours, to make a positive impact in the communities where we work and live, especially around education, poverty, children and human rights.</li>\n</ul>',
    },
    cta: {
      value: {
        href: 'https://www.nov.com/',
        text: 'Read more',
        linktype: 'external',
        url: 'https://www.nov.com/',
        anchor: '',
        title: 'Read more',
        target: '_blank',
      },
    },
    heading: {
      value: 'Global Family',
    },
    backgroundVideo: {
      value:
        'https://nov-web.s3.ca-central-1.amazonaws.com/Energy+Transition/Nov+Industries+Hero+Banner-1.mp4',
    },
    imageCropRegion: {
      value: '',
    },
    image: {
      value: {
        src: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/nov/Images/About/We-Are-NOV-About/NOV-employee-on-rigsite.jpg?h=295&iar=0&w=514',
        alt: 'Service technician looking at rigsite',
        width: '514',
        height: '295',
      },
    },
  },
};
export const noData = {
  render: {},
  params: [],
};

export default defaultData;
