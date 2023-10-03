// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Form, { FormDataProps } from './Form';
import defaultData from './Form.mock-data';

const meta: Meta<typeof Form> = {
  title: 'Authorable/General/Form',
  component: Form,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: (args) => {
    return <Form {...(expandObj({ ...args }) as FormDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
