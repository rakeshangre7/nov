// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import SoundcloudPlayerWrapper, { SoundcloudPlayerWrapperProps } from './SoundcloudPlayerWrapper';
import defaultData from './SoundcloudPlayerWrapper.mock-data';

const meta: Meta<typeof SoundcloudPlayerWrapper> = {
  title: 'Helpers/General/SoundcloudPlayerWrapper',
  component: SoundcloudPlayerWrapper,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SoundcloudPlayerWrapper>;

export const Default: Story = {
  render: (args) => {
    return (
      <SoundcloudPlayerWrapper {...(expandObj({ ...args }) as SoundcloudPlayerWrapperProps)} />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
