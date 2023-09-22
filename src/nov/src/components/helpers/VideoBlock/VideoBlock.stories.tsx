// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import VideoBlock from './VideoBlock';
import defaultData from './VideoBlock.mock-data';
import { VideoBlockProps } from '@/components/helpers/VideoBlock/VideoBlock';

const meta: Meta<typeof VideoBlock> = {
  title: 'Authorable/General/VideoBlock',
  component: VideoBlock,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VideoBlock>;

export const Default: Story = {
  render: (args) => {
    return <VideoBlock {...expandObj({ ...(args as VideoBlockProps) })} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
