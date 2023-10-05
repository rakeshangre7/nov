// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import FlipCards, { FlipCardsProps } from './FlipCards';
import defaultData from './FlipCards.mock-data';

const meta: Meta<typeof FlipCards> = {
  title: 'Authorable/General/FlipCards',
  component: FlipCards,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FlipCards>;

export const Default: Story = {
  render: (args) => {
    return <FlipCards {...(expandObj({ ...args }) as FlipCardsProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
