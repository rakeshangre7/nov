// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import ContentBlockTestimonial, { ContentBlockTestimonialProps } from './ContentBlockTestimonial';
import defaultData, { WithImageData } from './ContentBlockTestimonial.mock-data';

const meta: Meta<typeof ContentBlockTestimonial> = {
  title: 'Authorable/General/ContentBlockTestimonial',
  component: ContentBlockTestimonial,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContentBlockTestimonial>;

export const Default: Story = {
  render: (args) => {
    return (
      <ContentBlockTestimonial {...(expandObj({ ...args }) as ContentBlockTestimonialProps)} />
    );
  },
  args: {
    ...flattenObj(defaultData),
  },
};

export const WithImage: Story = {
  render: (args) => {
    return (
      <ContentBlockTestimonial {...(expandObj({ ...args }) as ContentBlockTestimonialProps)} />
    );
  },
  args: {
    ...flattenObj(WithImageData),
  },
};
