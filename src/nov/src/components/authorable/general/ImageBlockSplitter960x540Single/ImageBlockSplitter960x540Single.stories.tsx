// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlockSplitter960x540Single, {
  ImageBlockSplitter960x540SingleProps,
} from './ImageBlockSplitter960x540Single';
import defaultData from './ImageBlockSplitter960x540Single.mock-data';

const meta: Meta<typeof ImageBlockSplitter960x540Single> = {
  title: 'Authorable/General/ImageBlockSplitter960x540Single',
  component: ImageBlockSplitter960x540Single,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlockSplitter960x540Single>;

export const Default: Story = {
  render: (args) => {
    return (
      <ImageBlockSplitter960x540Single
        {...(expandObj({ ...args }) as unknown as ImageBlockSplitter960x540SingleProps)}
      />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
