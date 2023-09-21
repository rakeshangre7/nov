// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlock1920x1080 from './ImageBlock1920x1080';
import defaultData from './ImageBlock1920x1080.mock-data';
import { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const meta: Meta<typeof ImageBlock1920x1080> = {
  title: 'Authorable/General/ImageBlock1920x1080',
  component: ImageBlock1920x1080,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlock1920x1080>;

export const Default: Story = {
  render: (args) => {
    return <ImageBlock1920x1080 {...expandObj({ ...(args as ImageBlockProps) })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
