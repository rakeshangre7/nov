// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import VideoPlayerSlider, { VideoPlayerSliderProps } from './VideoPlayerSlider';
import defaultData from './VideoPlayerSlider.mock-data';

const meta: Meta<typeof VideoPlayerSlider> = {
  title: 'Authorable/General/VideoPlayerSlider',
  component: VideoPlayerSlider,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof VideoPlayerSlider>;

export const Default: Story = {
  render: (args) => {
    return <VideoPlayerSlider {...(expandObj({ ...args }) as VideoPlayerSliderProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
