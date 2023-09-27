// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageVideoBlock480x540 from './ImageVideoBlock480x540';
import defaultData from './ImageVideoBlock480x540.mock-data';
import { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const meta: Meta<typeof ImageVideoBlock480x540> = {
  title: 'Authorable/General/ImageVideoBlock480x540',
  component: ImageVideoBlock480x540,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageVideoBlock480x540>;

export const Default: Story = {
  render: (args) => {
    return <ImageVideoBlock480x540 {...expandObj({ ...(args as ImageBlockProps) })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
