// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Hero, { HeroProps } from './Hero';
import defaultData from './Hero.mock-data';

const meta: Meta<typeof Hero> = {
  title: 'Authorable/General/Hero',
  component: Hero,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: (args) => {
    return <Hero {...(expandObj({ ...args }) as HeroProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
