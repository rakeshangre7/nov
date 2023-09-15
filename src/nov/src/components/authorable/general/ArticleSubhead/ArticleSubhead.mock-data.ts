import { ArticleSubheadProps } from './ArticleSubhead';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ArticleSubheadProps = {
  uid: 'ce44e8c1-7136-4344-9638-f86b30174b72',
  componentName: 'ArticleSubhead',
  dataSource: '{9C99BD37-2475-437B-9517-D94B83CADBB4}',
  fields: {
    data: {
      datasource: {
        showDate: {
          jsonValue: {
            value: true,
          },
        },
        subheadText: {
          jsonValue: {
            value:
              '<p>A client operating in Garvin County, Oklahoma, was faced with the challenge of obtaining reliable real-time MWD data in a harsh buildup section of a well. They sought out our <a href="/sitecore/service/notfound.aspx?item=master%3a%7b0F73425F-FBD4-4BD8-8C9D-2911C7BB3EA0%7d%40en-US">Tolteq™ top-mount pulser</a>&nbsp;(TMP) for the job due to the use of high flow rates, high low-gravity solids, and the need to pump large quantities of cottonseed and cedar fiber lost-circulation material (LCM).</p>',
          },
        },
      },
      contextItem: {
        date: {
          jsonValue: {
            value: '2019-04-04T00:00:00Z',
          },
        },
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
