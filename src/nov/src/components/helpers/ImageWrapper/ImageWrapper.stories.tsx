// Global
import type { Meta, StoryObj } from '@storybook/react';
import ImageWrapper from './ImageWrapper';
import defaultData from './ImageWrapper.mock-data';

const meta: Meta<typeof ImageWrapper> = {
  argTypes: {},
  component: ImageWrapper,
  tags: ['autodocs'],
  title: 'Helpers/General/ImageWrapper',
};

export default meta;

type Story = StoryObj<typeof ImageWrapper>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};
