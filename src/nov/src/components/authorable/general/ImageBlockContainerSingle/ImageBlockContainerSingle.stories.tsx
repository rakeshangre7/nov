// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ImageBlockContainerSingle from './ImageBlockContainerSingle';
import defaultData from './ImageBlockContainerSingle.mock-data';
import { ImageBlockSplitterSingleProps } from '../ImageBlockSplitterSingle/ImageBlockSplitterSingle';

const meta: Meta<typeof ImageBlockContainerSingle> = {
  title: 'Authorable/General/ImageBlockContainerSingle',
  component: ImageBlockContainerSingle,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageBlockContainerSingle>;

export const Default: Story = {
  render: (args) => {
    return (
      <ImageBlockContainerSingle
        {...(expandObj({ ...args }) as unknown as ImageBlockSplitterSingleProps)}
      />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};
