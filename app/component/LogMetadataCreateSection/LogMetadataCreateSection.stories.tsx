import type { Meta, StoryObj } from '@storybook/react';
import LogMetadataCreateSection from '.';

const meta: Meta<typeof LogMetadataCreateSection> = {
  title: 'Components/LogMetadataCreateSection',
  component: LogMetadataCreateSection,
  parameters: {
    docs: {
      description: {
        component: '이미지 업로드, 제목 입력, 문구 작성을 포함하는 로그 생성 섹션입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
