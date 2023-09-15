// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ArticleText, { ArticleTextProps } from './ArticleText';
import defaultData from './ArticleText.mock-data';

const meta: Meta<typeof ArticleText> = {
  title: 'Authorable/General/ArticleText',
  component: ArticleText,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleText>;

export const Default: Story = {
  render: (args) => {
    return <ArticleText {...(expandObj({ ...args }) as ArticleTextProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
