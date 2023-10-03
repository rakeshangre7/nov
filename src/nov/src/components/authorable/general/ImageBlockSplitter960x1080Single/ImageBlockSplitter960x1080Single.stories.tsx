// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlockSplitter960x1080Single, {
  ImageBlockSplitter960x1080SingleProps,
} from './ImageBlockSplitter960x1080Single';
import defaultData from './ImageBlockSplitter960x1080Single.mock-data';

const meta: Meta<typeof ImageBlockSplitter960x1080Single> = {
  title: 'Authorable/General/ImageBlockSplitter960x1080Single',
  component: ImageBlockSplitter960x1080Single,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlockSplitter960x1080Single>;

export const Default: Story = {
  render: (args) => {
    return (
      <ImageBlockSplitter960x1080Single
        {...(expandObj({ ...args }) as unknown as ImageBlockSplitter960x1080SingleProps)}
      />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
