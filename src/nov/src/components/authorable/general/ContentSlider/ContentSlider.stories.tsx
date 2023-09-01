// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ContentSlider, { ContentSliderProps } from './ContentSlider';
import defaultData from './ContentSlider.mock-data';

const meta: Meta<typeof ContentSlider> = {
  title: 'Authorable/General/ContentSlider',
  component: ContentSlider,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContentSlider>;

export const Default: Story = {
  render: (args) => {
    return <ContentSlider {...(expandObj({ ...args }) as ContentSliderProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
