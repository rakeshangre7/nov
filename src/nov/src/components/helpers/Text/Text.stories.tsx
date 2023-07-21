// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import Text, { TEXT_TAGS } from './Text';
import defaultData, {
  blockquote,
  bold,
  deleted,
  em,
  heading,
  italics,
  small,
  span,
} from './Text.mock-data';

const meta: Meta<typeof Text> = {
  argTypes: {
    className: {
      description: 'CSS classes to be added to the rendered element.',
    },
    id: {
      description: 'The name of the "id" attribute to be added to the rendered element.',
    },
    tag: {
      control: 'select',
      defaultValue: 'p',
      description: 'The HTML tag into which the text will be rendered.',
      options: TEXT_TAGS,
    },
    text: {
      description: 'The text to be rendered.',
    },
  },
  component: Text,
  tags: ['autodocs'],
  title: 'Helpers/General/Text',
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};

export const Blockquote: Story = {
  args: {
    ...blockquote,
  },
};

export const Bold: Story = {
  args: {
    ...bold,
  },
};

export const Deleted: Story = {
  args: {
    ...deleted,
  },
};

export const Em: Story = {
  args: {
    ...em,
  },
};

export const Heading: Story = {
  args: {
    ...heading,
  },
};

export const Italics: Story = {
  args: {
    ...italics,
  },
};

export const Span: Story = {
  args: {
    ...span,
  },
};

export const Small: Story = {
  args: {
    ...small,
  },
};
