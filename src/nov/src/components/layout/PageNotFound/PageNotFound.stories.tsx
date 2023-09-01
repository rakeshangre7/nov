// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import PageNotFound, { PageNotFoundProps } from './PageNotFound';
import defaultData from './PageNotFound.mock-data';

const meta: Meta<typeof PageNotFound> = {
  title: 'Authorable/General/PageNotFound',
  component: PageNotFound,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageNotFound>;

export const Default: Story = {
  render: (args) => {
    return <PageNotFound {...(expandObj({ ...args }) as PageNotFoundProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
