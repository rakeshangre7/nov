import { StatsBlockProps } from './StatsBlock';

const defaultData: StatsBlockProps = {
  rendering: { componentName: 'StatsBlock' },
  params: {},
  fields: {
    statCTA1: { value: { href: '', text: 'Learn More' } },
    statCTA2: { value: { href: '', text: 'Learn More' } },
    statCTA3: { value: { href: '', text: 'Learn More' } },
    statNumber1: { value: 'ISO ' },
    statNumber2: { value: '50+' },
    statNumber3: { value: '22' },
    statText1: { value: 'Certified & API Q1' },
    statText2: { value: 'CNC Machines' },
    statText3: { value: 'Overhead Cranes' },
    suffix1: { value: '9001' },
    suffix2: { value: '' },
    suffix3: { value: '' },
  },
};

export const noData = {
  rendering: {},
  params: {},
};

export default defaultData;
