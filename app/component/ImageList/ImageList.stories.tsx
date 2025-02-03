import type { Meta, StoryObj } from '@storybook/react';
import ImageList from '.';

const meta: Meta<typeof ImageList> = {
  title: 'Components/ImageList',
  component: ImageList,
  parameters: {
    docs: {
      description: {
        component: '이미지를 목록으로 표시하고 삭제할 수 있는 리스트 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    imageObjects: {
      description: '표시할 이미지 목록',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageObjects: [
      {
        id: '1',
        url: 'https://picsum.photos/100',
        onRemove: () => console.log('이미지 1 삭제'),
      },
      {
        id: '2',
        url: 'https://picsum.photos/100',
        onRemove: () => console.log('이미지 2 삭제'),
      },
      {
        id: '3',
        url: 'https://picsum.photos/100',
        onRemove: () => console.log('이미지 3 삭제'),
      },
    ],
  },
};
