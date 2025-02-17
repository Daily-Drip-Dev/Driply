import type { Meta, StoryObj } from '@storybook/react';
import SortableImageCard from '.';

const meta: Meta<typeof SortableImageCard> = {
  title: 'Components/SortableImageCard',
  component: SortableImageCard,
  parameters: {
    docs: {
      description: {
        component: '이미지를 표시하고 제거할 수 있는 카드 컴포넌트입니다. dnd kit의 useSortable을 사용합니다.',
      },
    },
  },
  argTypes: {
    imageUrl: {
      control: 'text',
      description: '표시할 이미지의 URL',
      defaultValue: 'https://picsum.photos/80',
    },
    onRemove: { action: '이미지 삭제됨', description: '이미지 제거 버튼 클릭 시 호출되는 핸들러' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: 'https://picsum.photos/80',
  },
};
