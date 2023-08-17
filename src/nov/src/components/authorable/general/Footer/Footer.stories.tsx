// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Footer, { FooterProps } from './Footer';
import defaultData from './Footer.mock-data';

const meta: Meta<typeof Footer> = {
  title: 'Authorable/General/Footer',
  component: Footer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => {
    return <Footer {...(expandObj({ ...args }) as FooterProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
