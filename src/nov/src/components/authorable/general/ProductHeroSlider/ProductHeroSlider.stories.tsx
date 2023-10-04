// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ProductHeroSlider, { ProductHeroSliderProps } from './ProductHeroSlider';
import defaultData from './ProductHeroSlider.mock-data';

const meta: Meta<typeof ProductHeroSlider> = {
  title: 'Authorable/General/ProductHeroSlider',
  component: ProductHeroSlider,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProductHeroSlider>;

export const Default: Story = {
  render: (args) => {
    return <ProductHeroSlider {...(expandObj({ ...args }) as ProductHeroSliderProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
