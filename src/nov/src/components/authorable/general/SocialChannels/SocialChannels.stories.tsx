// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import SocialChannels, { SocialChannelsProps } from './SocialChannels';
import defaultData from './SocialChannels.mock-data';

const meta: Meta<typeof SocialChannels> = {
  title: 'Authorable/General/SocialChannels',
  component: SocialChannels,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SocialChannels>;

export const Default: Story = {
  render: (args) => {
    return <SocialChannels {...(expandObj({ ...args }) as SocialChannelsProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
