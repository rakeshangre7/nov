// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import MapLocation, { MapLocationProps } from './MapLocation';
import defaultData from './MapLocation.mock-data';

const meta: Meta<typeof MapLocation> = {
  title: 'Authorable/General/MapLocation',
  component: MapLocation,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MapLocation>;

export const Default: Story = {
  render: (args) => {
    return <MapLocation {...(expandObj({ ...args }) as MapLocationProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
