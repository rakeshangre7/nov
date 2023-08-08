// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import TitleBlock, { TitleBlockProps } from './TitleBlock';
import defaultData from './TitleBlock.mock-data';

const meta: Meta<typeof TitleBlock> = {
  title: 'Authorable/General/TitleBlock',
  component: TitleBlock,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TitleBlock>;

export const Default: Story = {
  render: (args) => {
    return <TitleBlock {...(expandObj({ ...args }) as TitleBlockProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
