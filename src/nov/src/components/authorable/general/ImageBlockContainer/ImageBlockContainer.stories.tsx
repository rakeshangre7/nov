// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlockContainer from './ImageBlockContainer';
import defaultData from './ImageBlockContainer.mock-data';
import { ImageBlockSplitterSingleProps } from '../ImageBlockSplitterSingle/ImageBlockSplitterSingle';

const meta: Meta<typeof ImageBlockContainer> = {
  title: 'Authorable/General/ImageBlockContainer',
  component: ImageBlockContainer,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlockContainer>;

export const Default: Story = {
  render: (args) => {
    return (
      <ImageBlockContainer
        {...(expandObj({ ...args }) as unknown as ImageBlockSplitterSingleProps)}
      />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
