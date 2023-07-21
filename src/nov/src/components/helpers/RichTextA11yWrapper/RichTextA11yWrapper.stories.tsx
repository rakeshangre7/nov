// Global
import type { Meta, StoryObj } from '@storybook/react';
import { RichTextProps } from '@sitecore-jss/sitecore-jss-nextjs/types/components/RichText';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import RichTextA11yWrapper from './RichTextA11yWrapper';
import defaultData from './RichTextA11yWrapper.mock-data';

const meta: Meta<typeof RichTextA11yWrapper> = {
  title: 'Helpers/A11y/RichTextA11yWrapper',
  component: RichTextA11yWrapper,
  argTypes: {
    editable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RichTextA11yWrapper>;

export const Default: Story = {
  render: (args) => {
    return <RichTextA11yWrapper {...(expandObj({ ...args }) as RichTextProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
