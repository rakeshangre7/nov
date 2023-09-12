// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ContentBlockText, { ContentBlockTextProps } from './ContentBlockText';
import defaultData, { rightData } from './ContentBlockText.mock-data';

const meta: Meta<typeof ContentBlockText> = {
  title: 'Authorable/General/ContentBlockText',
  component: ContentBlockText,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContentBlockText>;

export const Default: Story = {
  render: (args) => {
    return <ContentBlockText {...(expandObj({ ...args }) as ContentBlockTextProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
export const Reverse: Story = {
  render: (args) => {
    return <ContentBlockText {...(expandObj({ ...args }) as ContentBlockTextProps)} />;
  },
  args: {
    ...flattenObj(rightData),
  },
};
