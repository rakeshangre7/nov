// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import VideoPlayer from './VideoPlayer';
import { defaultData } from './VideoPlayer.mock-data';

const meta: Meta<typeof VideoPlayer> = {
  argTypes: {},
  component: VideoPlayer,
  tags: ['autodocs'],
  title: 'Helpers/General/VideoPlayer',
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};
