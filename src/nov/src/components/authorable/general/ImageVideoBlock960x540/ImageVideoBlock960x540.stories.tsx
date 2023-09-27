// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageVideoBlock960x540 from './ImageVideoBlock960x540';
import defaultData from './ImageVideoBlock960x540.mock-data';
import { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const meta: Meta<typeof ImageVideoBlock960x540> = {
  title: 'Authorable/General/ImageVideoBlock960x540',
  component: ImageVideoBlock960x540,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageVideoBlock960x540>;

export const Default: Story = {
  render: (args) => {
    return <ImageVideoBlock960x540 {...expandObj({ ...(args as ImageBlockProps) })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
