// Global
import type { Meta, StoryObj } from '@storybook/react';

// Local
import Button from './Button';
import {
  defaultData,
  primaryData,
  secondaryData,
  tertiaryData,
  standardData,
} from './Button.mock-data';

const meta: Meta<typeof Button> = {
  argTypes: {
    variant: {
      control: 'select',
      defaultValue: 'button',
      description: 'Variant of button and link',
      options: ['button', 'primary', 'secondary', 'tertiary', 'standard'],
    },

    auto: {
      control: 'boolean',
      defaultValue: true,
      description: 'Determines if the button has a minimum width or sizes to fit its content.',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'A flag indicated the enabled/disabled state of the button.',
    },
    iconFullWidth: {
      control: 'boolean',
      defaultValue: false,
      description: 'For button icon full width',
    },
    iconPosition: {
      control: 'select',
      defaultValue: 'right',
      description: "Specifies an icon to appear to the right of the button's label.",
      options: ['left', 'right'],
    },
    text: {
      control: 'text',
      description: 'Button text',
    },
    field: {
      control: 'object',
      description: 'Button/Link data',
    },
    onClick: {
      description: 'A function defining a click handler for the button.',
    },
    ref: {
      description: 'A React hook to be assigned to the button.',
    },
    className: {
      control: 'text',
      description: 'Additional className for the button',
    },
    iconClassName: {
      control: 'text',
      description: 'Additional className for the Icon',
    },
  },
  component: Button,
  parameters: {
    mockData: [
      {
        method: 'GET',
        response: { buttonIcons: true, maintenanceMode: false },
        status: 200,
        url: '/api/feature-flags',
      },
    ],
  },
  tags: ['autodocs'],
  title: 'Helpers/General/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BasicButton: Story = {
  args: {
    ...defaultData,
  },
};

export const Primary: Story = {
  args: {
    ...primaryData,
  },
};

export const Secondary: Story = {
  args: {
    ...secondaryData,
  },
};

export const Tertiary: Story = {
  args: {
    ...tertiaryData,
  },
};

export const Standard: Story = {
  args: {
    ...standardData,
  },
};
