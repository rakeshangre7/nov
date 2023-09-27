// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlock960x540 from './ImageBlock960x540';
import defaultData from './ImageBlock960x540.mock-data';
import { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const meta: Meta<typeof ImageBlock960x540> = {
  title: 'Authorable/General/ImageBlock960x540',
  component: ImageBlock960x540,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlock960x540>;

export const Default: Story = {
  render: (args) => {
    return <ImageBlock960x540 {...expandObj({ ...(args as ImageBlockProps) })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
