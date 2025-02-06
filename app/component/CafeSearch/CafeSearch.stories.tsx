import type { Meta, StoryObj } from '@storybook/react';
import CafeSearch from '.';

const meta: Meta<typeof CafeSearch> = {
  title: 'Components/CafeSearch',
  component: CafeSearch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '`CafeSearch` 컴포넌트는 카페 검색을 위한 컴포넌트입니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '430px', height: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 상태',
  args: {
    onSearch: (data) => {
      console.log(data);
    },
  },
};
