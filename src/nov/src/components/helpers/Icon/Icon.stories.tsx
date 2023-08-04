// Global
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { iconDefaultClassName, iconList } from './Icon.mock-data';
import { getStorybookDefaultData } from '../CommonData/helper';

const meta: Meta<typeof Icon> = {
  argTypes: {
    className: {
      control: 'select',
      options: iconList,
      description: 'Class name for icon along with style classes',
      ...getStorybookDefaultData(iconList[0] + iconDefaultClassName),
    },
  },
  component: Icon,
  tags: ['autodocs'],
  title: 'Helpers/General/Icon',
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { className: iconList[0] },
};
