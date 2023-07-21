// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ContentBlock, { ContentBlockProps } from './ContentBlock';
import defaultData from './ContentBlock.mock-data';

const meta: Meta<typeof ContentBlock> = {
  title: 'Authorable/General/ContentBlock',
  component: ContentBlock,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ContentBlock>;

export const Default: Story = {
  render: (args) => {
    return <ContentBlock {...(expandObj({ ...args }) as ContentBlockProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
