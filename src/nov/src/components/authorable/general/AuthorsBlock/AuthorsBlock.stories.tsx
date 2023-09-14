// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import AuthorsBlock, { AuthorsBlockProps } from './AuthorsBlock';
import defaultData from './AuthorsBlock.mock-data';

const meta: Meta<typeof AuthorsBlock> = {
  title: 'Authorable/General/AuthorsBlock',
  component: AuthorsBlock,
  argTypes: {},
  tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof AuthorsBlock>;

export const Default: Story = {
  render: (args) => {
    return <AuthorsBlock {...(expandObj({ ...args }) as AuthorsBlockProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
