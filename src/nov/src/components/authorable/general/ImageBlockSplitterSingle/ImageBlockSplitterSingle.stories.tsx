// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlockSplitterSingle, {
  ImageBlockSplitterSingleProps,
} from './ImageBlockSplitterSingle';
import defaultData from './ImageBlockSplitterSingle.mock-data';

const meta: Meta<typeof ImageBlockSplitterSingle> = {
  title: 'Authorable/General/ImageBlockSplitterSingle',
  component: ImageBlockSplitterSingle,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlockSplitterSingle>;

export const Default: Story = {
  render: (args) => {
    return (
      <ImageBlockSplitterSingle
        {...(expandObj({ ...args }) as unknown as ImageBlockSplitterSingleProps)}
      />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
