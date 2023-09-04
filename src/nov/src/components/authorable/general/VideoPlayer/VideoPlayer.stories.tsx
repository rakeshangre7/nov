// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import VideoPlayer, { VideoPlayerProps } from './VideoPlayer';
import defaultData from './VideoPlayer.mock-data';

const meta: Meta<typeof VideoPlayer> = {
  title: 'Authorable/General/VideoPlayer',
  component: VideoPlayer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
  render: (args) => {
    return <VideoPlayer {...(expandObj({ ...args }) as VideoPlayerProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
