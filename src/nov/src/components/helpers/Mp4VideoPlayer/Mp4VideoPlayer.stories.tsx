// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import Mp4VideoPlayer from './Mp4VideoPlayer';
import { defaultData } from './Mp4VideoPlayer.mock-data';

const meta: Meta<typeof Mp4VideoPlayer> = {
  argTypes: {},
  component: Mp4VideoPlayer,
  tags: ['autodocs'],
  title: 'Helpers/General/Mp4VideoPlayer',
};

export default meta;

type Story = StoryObj<typeof Mp4VideoPlayer>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};
