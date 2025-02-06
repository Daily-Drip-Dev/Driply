import type { Meta, StoryObj } from '@storybook/react';
import Loader from '.';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "lg",
  },
};
