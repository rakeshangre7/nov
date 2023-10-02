// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import HeroSlider, { HeroSliderProps } from './HeroSlider';
import defaultData from './HeroSlider.mock-data';

const meta: Meta<typeof HeroSlider> = {
  title: 'Authorable/General/HeroSlider',
  component: HeroSlider,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HeroSlider>;

export const Default: Story = {
  render: (args) => {
    return <HeroSlider {...(expandObj({ ...args }) as HeroSliderProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
