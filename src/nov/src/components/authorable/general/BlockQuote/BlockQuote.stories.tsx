// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import BlockQuote, { BlockQuoteProps } from './BlockQuote';
import defaultData, { rightData } from './BlockQuote.mock-data';

const meta: Meta<typeof BlockQuote> = {
  title: 'Authorable/General/BlockQuote',
  component: BlockQuote,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BlockQuote>;

export const Default: Story = {
  render: (args) => {
    return <BlockQuote {...(expandObj({ ...args }) as BlockQuoteProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
export const WithoutImage: Story = {
  render: (args) => {
    return <BlockQuote {...(expandObj({ ...args }) as BlockQuoteProps)} />;
  },
  args: {
    ...flattenObj(rightData),
  },
};
