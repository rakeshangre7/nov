// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import PodcastFeed, { PodcastFeedProps } from './PodcastFeed';
import defaultData from './PodcastFeed.mock-data';

const meta: Meta<typeof PodcastFeed> = {
  title: 'Authorable/General/PodcastFeed',
  component: PodcastFeed,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PodcastFeed>;

export const Default: Story = {
  render: (args) => {
    return <PodcastFeed {...(expandObj({ ...args }) as PodcastFeedProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
