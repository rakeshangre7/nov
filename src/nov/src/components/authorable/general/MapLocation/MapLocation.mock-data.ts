import { MapLocationProps } from './MapLocation';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: MapLocationProps = {
  rendering: { componentName: 'MapLocation' },
  params: {},
  fields: {
    businessSegment: null,
    disableControls: {
      value: false,
    },
    facilities: {
      value: '',
    },
    locations: {
      value: '57.069913|57.06831|57.0693',
    },
    searchTerm: {
      value: '',
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
