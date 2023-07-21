// Global
import iconData from '@material-icons/svg/data.json';
import type { Meta, StoryObj } from '@storybook/react';

// Local
import GoogleMaterialSymbol from './GoogleMaterialSymbol';
import defaultData from './GoogleMaterialSymbol.mock-data';

const icons = iconData.icons.map((icon) => icon.name);
const styles = ['baseline', 'outline', 'round', 'sharp', 'twotone'];

const meta: Meta<typeof GoogleMaterialSymbol> = {
  argTypes: {
    className: {
      description: 'CSS classes to be applied to the icon.',
    },
    icon: {
      control: 'select',
      defaultValue: 'cached',
      description: 'The icon to be displayed.',
      options: icons,
    },
    variant: {
      control: 'select',
      defaultValue: 'round',
      description: 'The icon variant to be displayed.',
      options: styles,
    },
  },
  component: GoogleMaterialSymbol,
  tags: ['autodocs'],
  title: 'Helpers/General/Google Material Symbol',
};

export default meta;

type Story = StoryObj<typeof GoogleMaterialSymbol>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};
