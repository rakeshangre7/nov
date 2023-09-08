// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import BrandCapabilityList, { BrandCapabilityListProps } from './BrandCapabilityList';
import defaultData from './BrandCapabilityList.mock-data';

const meta: Meta<typeof BrandCapabilityList> = {
  title: 'Authorable/General/BrandCapabilityList',
  component: BrandCapabilityList,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BrandCapabilityList>;

export const Default: Story = {
  render: (args) => {
    return <BrandCapabilityList {...(expandObj({ ...args }) as BrandCapabilityListProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
