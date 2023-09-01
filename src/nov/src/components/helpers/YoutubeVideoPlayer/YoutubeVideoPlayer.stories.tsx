// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import YoutubeVideoPlayer from './YoutubeVideoPlayer';
import { defaultData } from './YoutubeVideoPlayer.mock-data';

const meta: Meta<typeof YoutubeVideoPlayer> = {
  argTypes: {},
  component: YoutubeVideoPlayer,
  tags: ['autodocs'],
  title: 'Helpers/General/YoutubeVideoPlayer',
};

export default meta;

type Story = StoryObj<typeof YoutubeVideoPlayer>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};
