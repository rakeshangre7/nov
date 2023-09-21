// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ArticleImage, { ArticleImageProps } from './ArticleImage';
import defaultData from './ArticleImage.mock-data';

const meta: Meta<typeof ArticleImage> = {
  title: 'Authorable/General/ArticleImage',
  component: ArticleImage,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleImage>;

export const Default: Story = {
  render: (args) => {
    return <ArticleImage {...(expandObj({ ...args }) as ArticleImageProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
