// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ContentList3x1, { ContentList3x1Props } from './ContentList3x1';
import defaultData from './ContentList3x1.mock-data';

const meta: Meta<typeof ContentList3x1> = {
  title: 'Authorable/General/ContentList3x1',
  component: ContentList3x1,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ContentList3x1>;

export const Default: Story = {
  render: (args) => {
    return <ContentList3x1 {...(expandObj({ ...args }) as ContentList3x1Props)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
