// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import HomePageHero, { HomePageHeroProps } from './HomePageHero';
import defaultData from './HomePageHero.mock-data';

const meta: Meta<typeof HomePageHero> = {
  title: 'Authorable/General/HomePageHero',
  component: HomePageHero,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HomePageHero>;

export const Default: Story = {
  render: (args) => {
    return <HomePageHero {...(expandObj({ ...args }) as HomePageHeroProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
