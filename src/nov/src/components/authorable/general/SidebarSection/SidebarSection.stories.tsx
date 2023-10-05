// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import SidebarSection, { SidebarSectionProps } from './SidebarSection';
import defaultData from './SidebarSection.mock-data';

const meta: Meta<typeof SidebarSection> = {
  title: 'Authorable/General/SidebarSection',
  component: SidebarSection,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarSection>;

export const Default: Story = {
  render: (args) => {
    return <SidebarSection {...(expandObj({ ...args }) as SidebarSectionProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
