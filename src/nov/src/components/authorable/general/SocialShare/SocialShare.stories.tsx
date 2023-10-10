// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import SocialShare, { SocialShareProps } from './SocialShare';
import defaultData from './SocialShare.mock-data';

const meta: Meta<typeof SocialShare> = {
  title: 'Authorable/General/SocialShare',
  component: SocialShare,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SocialShare>;

export const Default: Story = {
  render: (args) => {
    return <SocialShare {...(expandObj({ ...args }) as SocialShareProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
