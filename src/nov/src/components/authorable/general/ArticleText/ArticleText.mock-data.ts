import { ArticleTextProps } from './ArticleText';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ArticleTextProps = {
  uid: '37dc6908-9973-4bf3-aa1f-616581927f03',
  componentName: 'ArticleText',
  dataSource: '{A5987B01-565F-4307-8D81-AFD05A12530F}',
  // params: {
  //   useButtonForLink: '1',
  // },
  fields: {
    body: {
      value:
        '<p>The EFD viewer provides enables rapid assessment of the condition of the entire wellbore from a pressure perspective and the dynamic stability of the entire drilling system. Additionally, the EFD viewer provides an estimated equivalent circulating density reading at the shoe, updated in real time.</p>\n<p>Using a color gradient-based display, users can easily assess conditions such as hole cleaning and the impact parameters have on it, sweep efficiency, and the onset of hole instability and losses. The gradient-based method enables more rapid digestion of complex data than traditional methods, facilitating swifter decision making and a net reduction of risk in our customers&rsquo; operations.</p>\n<p>The dynamics portion of the viewer illustrates the dynamic state of the drillstring, allowing users to easily determine a change in the stability of the overall system. EFD viewer operation requires <a href="/About/Our-Business-Units/IntelliServ">IntelliServ&trade;</a>&nbsp;high-speed wired pipe telemetry, a minimum of two pressure and dynamics measure points, and our EDR installed at the rigsite and associated workstation.</p>',
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
