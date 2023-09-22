// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageVideoBlock1920x1080 from './ImageVideoBlock1920x1080';
import defaultData from './ImageVideoBlock1920x1080.mock-data';
import { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const meta: Meta<typeof ImageVideoBlock1920x1080> = {
  title: 'Authorable/General/ImageVideoBlock1920x1080',
  component: ImageVideoBlock1920x1080,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageVideoBlock1920x1080>;

export const Default: Story = {
  render: (args) => {
    return <ImageVideoBlock1920x1080 {...expandObj({ ...(args as ImageBlockProps) })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
