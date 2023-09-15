import { ArticleTextProps } from './ArticleText';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ArticleTextProps = {
  uid: '37dc6908-9973-4bf3-aa1f-616581927f03',
  componentName: 'ArticleText',
  dataSource: '{E1C1BB95-AD8A-4F2B-9ED2-14C8799CD1DA}',
  fields: {
    body: {
      value:
        '<p>The client used our 6.50-in. TMP to drill 3,100 ft across 275 downhole hours at an average flow rate of 570 gal/min to a maximum depth of more than 13,300-ft MD/10,900-ft TVC. The TMP delivered reliable pulses across the run, with a single pulser operating for 250 hours without any issues. The client was pleased with the successful use of the TMP and how it created strong, fast MWD pulses in a demanding application where there was significant LCM.</p>\n<style>\n    .header{background-color:black;}\n</style>',
    },
    ctaLink: {
      value: {
        text: 'testinglink',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        target: '',
        querystring: '',
        id: '{784DD9E8-C40D-47F4-ACCF-893251B02EB3}',
        href: '/About',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
