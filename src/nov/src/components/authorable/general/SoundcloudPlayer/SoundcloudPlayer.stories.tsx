// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import SoundcloudPlayer, { SoundcloudPlayerProps } from './SoundcloudPlayer';
import defaultData from './SoundcloudPlayer.mock-data';

const meta: Meta<typeof SoundcloudPlayer> = {
  title: 'Authorable/General/SoundcloudPlayer',
  component: SoundcloudPlayer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SoundcloudPlayer>;

export const Default: Story = {
  render: (args) => {
    return <SoundcloudPlayer {...(expandObj({ ...args }) as SoundcloudPlayerProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
