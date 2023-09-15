// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ArticleSubhead, { ArticleSubheadProps } from './ArticleSubhead';
import defaultData from './ArticleSubhead.mock-data';

const meta: Meta<typeof ArticleSubhead> = {
  title: 'Authorable/General/ArticleSubhead',
  component: ArticleSubhead,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleSubhead>;

export const Default: Story = {
  render: (args) => {
    return <ArticleSubhead {...(expandObj({ ...args }) as ArticleSubheadProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
