import type { Meta, StoryObj } from '@storybook/react';
import CoffeeScoreSlider from '.';

const meta: Meta<typeof CoffeeScoreSlider> = {
  title: 'Components/CoffeeScoreSlider',
  component: CoffeeScoreSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 상태',
  args: { title: 'flavor' },
};
