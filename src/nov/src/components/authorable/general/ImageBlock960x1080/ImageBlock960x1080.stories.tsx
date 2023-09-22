// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlock960x1080, { ImageBlock960x1080Props } from './ImageBlock960x1080';
import defaultData from './ImageBlock960x1080.mock-data';

const meta: Meta<typeof ImageBlock960x1080> = {
  title: 'Authorable/General/ImageBlock960x1080',
  component: ImageBlock960x1080,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlock960x1080>;

export const Default: Story = {
  render: (args) => {
    return <ImageBlock960x1080 {...expandObj({ ...(args as ImageBlock960x1080Props) })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
