// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import HoverImage, { HoverImageProps } from './HoverImage';
import defaultData from './HoverImage.mock-data';

const meta: Meta<typeof HoverImage> = {
  title: 'Authorable/General/HoverImage',
  component: HoverImage,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HoverImage>;

export const Default: Story = {
  render: (args) => {
    return <HoverImage {...(expandObj({ ...args }) as HoverImageProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
