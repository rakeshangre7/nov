import { SidebarSectionProps } from './SidebarSection';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: SidebarSectionProps = {
  uid: '5c64a0f3-7502-4f42-a194-1215d617fd8f',
  componentName: 'SidebarSection',
  dataSource: '{E2D4BBA8-5047-4A8E-A9D0-7DDCF6EB292B}',
  fields: {
    link1: {
      value: {
        text: '2022 NOV Sustainability Report',
        linktype: 'internal',
        querystring: '',
        target: '',
        id: '{48FB2057-1B53-4458-B152-648DEEC95CC0}',
        href: '/About/Sustainability/Report',
      },
    },
    link2: {
      value: {
        href: 'https://edge.sitecorecloud.io/nationaloile493-nov-dev-59ee/media/Feature/nov/Files/About/Sustainability/2021-NOV-Sustainability-Report.pdf',
        text: '2021 NOV Sustainability Report',
        linktype: 'internal',
        querystring: '',
        target: '',
        id: '{F04B11C9-156B-4365-8D8D-B7792B3A73D2}',
      },
    },
    link3: {
      value: {
        href: 'https://investors.nov.com/conduct-and-ethics',
        text: 'Code of Conduct',
        linktype: 'external',
        url: 'https://investors.nov.com/conduct-and-ethics',
        anchor: '',
        target: '',
      },
    },
    link4: {
      value: {
        linktype: 'internal',
        querystring: '',
        target: '',
        id: '{1E32B8F2-C3C1-4AC3-A0B6-070CE13BD306}',
        href: '/Policies',
      },
    },
    link5: {
      value: {
        linktype: 'internal',
        querystring: '',
        target: '',
        id: '{BDCCE5F7-F000-423F-A616-38A2004787EC}',
        href: '/Products-and-Services/Capabilities/Energy-Transition',
      },
    },
    link6: {
      value: {
        linktype: 'internal',
        querystring: '',
        target: '',
        id: '{D05ED170-A3AE-4FE6-AD7B-CD743A4D3126}',
        href: '/About/Sustainability/Environmental-Topics-and-Definitions',
      },
    },
  },
  placeholders: {
    'sidebar-content': [
      {
        uid: '70841947-2943-4f5c-a363-8c24bef9dc02',
        componentName: 'TitleBlock',
        dataSource: '{88DF89CD-A559-4211-8444-0DFE5921C93B}',
        params: {
          alignment: 'center,left',
        },
        fields: {
          title: {
            value:
              '“We enable energy for life. Making energy accessible, affordable, attainable, and sustainable is only part of our story. We are a diverse company with people who are personally invested in the outcomes of our environment and communities because we live here too.”',
          },
          body: {
            value: '<p>Clay Williams<br />\nChairman, President and Chief Executive Officer</p>',
          },
          cta: {
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
  render: {},
  params: [],
};

export default defaultData;
