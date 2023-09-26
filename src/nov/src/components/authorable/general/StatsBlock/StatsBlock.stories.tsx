// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import StatsBlock, { StatsBlockProps } from './StatsBlock';
import defaultData from './StatsBlock.mock-data';

const meta: Meta<typeof StatsBlock> = {
  title: 'Authorable/General/StatsBlock',
  component: StatsBlock,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StatsBlock>;

export const Default: Story = {
  render: (args) => {
    return <StatsBlock {...(expandObj({ ...args }) as StatsBlockProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
