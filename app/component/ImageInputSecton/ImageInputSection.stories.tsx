import type { Meta, StoryObj } from '@storybook/react';
import ImageInputSection from '.';

const meta: Meta<typeof ImageInputSection> = {
  title: 'Components/ImageInputSection',
  component: ImageInputSection,
  parameters: {
    docs: {
      description: {
        component: '이미지를 업로드하고, 목록에서 삭제할 수 있는 입력 섹션 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    images: {
      description: '업로드된 이미지 목록',
      control: 'object',
      defaultValue: [{ previewUrl: 'https://picsum.photos/100' }, { previewUrl: 'https://picsum.photos/100' }],
    },
    pushImages: { action: '이미지 추가됨', description: '이미지 업로드 시 호출되는 핸들러' },
    deleteImage: { action: '이미지 삭제됨', description: '이미지 삭제 버튼 클릭 시 호출되는 핸들러' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShortWidth: Story = {
  decorators: (Story) => (
    <div style={{ width: '300px' }}>
      <Story />
    </div>
  ),
};
