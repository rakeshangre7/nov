// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import TextOnlyHero, { TextOnlyHeroProps } from './TextOnlyHero';
import defaultData from './TextOnlyHero.mock-data';

const meta: Meta<typeof TextOnlyHero> = {
  title: 'Authorable/General/TextOnlyHero',
  component: TextOnlyHero,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextOnlyHero>;

export const Default: Story = {
  render: (args) => {
    return <TextOnlyHero {...(expandObj({ ...args }) as TextOnlyHeroProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
