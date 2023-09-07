// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ContentList2x1, { ContentList2x1Props } from './ContentList2x1';
import defaultData from './ContentList2x1.mock-data';

const meta: Meta<typeof ContentList2x1> = {
  title: 'Authorable/General/ContentList2x1',
  component: ContentList2x1,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContentList2x1>;

export const Default: Story = {
  render: (args) => {
    return <ContentList2x1 {...(expandObj({ ...args }) as ContentList2x1Props)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
