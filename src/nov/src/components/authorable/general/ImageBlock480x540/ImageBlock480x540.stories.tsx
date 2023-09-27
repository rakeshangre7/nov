// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlock480x540 from './ImageBlock480x540';
import defaultData from './ImageBlock480x540.mock-data';
import { ImageBlockProps } from '@/components/helpers/ImageBlock/ImageBlock';

const meta: Meta<typeof ImageBlock480x540> = {
  title: 'Authorable/General/ImageBlock480x540',
  component: ImageBlock480x540,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlock480x540>;

export const Default: Story = {
  render: (args) => {
    return <ImageBlock480x540 {...expandObj({ ...(args as ImageBlockProps) })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
