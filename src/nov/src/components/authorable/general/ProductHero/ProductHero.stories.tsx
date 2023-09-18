// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ProductHero, { ProductHeroProps } from './ProductHero';
import defaultData from './ProductHero.mock-data';

const meta: Meta<typeof ProductHero> = {
  title: 'Authorable/General/ProductHero',
  component: ProductHero,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductHero>;

export const Default: Story = {
  render: (args) => {
    return <ProductHero {...(expandObj({ ...args }) as ProductHeroProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
