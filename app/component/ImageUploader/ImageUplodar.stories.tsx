import type { Meta, StoryObj } from '@storybook/react';
import ImageUploader from '.';

const meta: Meta<typeof ImageUploader> = {
  title: 'Components/ImageUploader',
  component: ImageUploader,
  parameters: {
    docs: {
      description: {
        component: '이미지를 업로드할 수 있는 버튼 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    maxCount: {
      control: { type: 'number' },
      description: '업로드할 수 있는 최대 이미지 개수',
      defaultValue: 5,
    },
    currentCount: {
      control: { type: 'number' },
      description: '현재 업로드된 이미지 개수',
      defaultValue: 0,
    },
    onChange: { action: '파일 업로드됨', description: '파일 업로드 시 호출되는 핸들러' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxCount: 5,
    currentCount: 0,
  },
};

export const Disabled: Story = {
  args: {
    maxCount: 5,
    currentCount: 5,
  },
};
