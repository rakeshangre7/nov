import { TitleBlockProps } from './TitleBlock';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: TitleBlockProps = {
  uid: '0e052187-985c-463e-a0f5-527bb8f6027c',
  componentName: 'TitleBlock',
  dataSource: '{274BB447-32EB-4791-B569-3F2E71225931}',
  params: {
    Styles: 'position-left',
    DynamicPlaceholderId: '1',
    FieldNames: 'Default',
  },
  fields: {
    body: {
      value:
        '<p>Our NOV family consists of passionate individuals from all backgrounds and perspectives coming together to drive innovation. Regardless of job functions and locations, our united commitment is to learn from one another to continue improving and diversifying our industry capabilities.</p>',
    },
    cta: {
      value: {
        href: 'https://www.horizontaldigital.com/',
        text: 'Working at NOV',
        linktype: 'external',
        url: 'https://www.horizontaldigital.com/',
        anchor: '',
        target: '_blank',
      },
    },
    title: {
      value: 'We are a Global Family',
    },
  },
};

export const noData = {
  render: {},
  params: [],
};

export default defaultData;
