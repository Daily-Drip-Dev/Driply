import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';
import { typography } from 'src/vanilla-extract/typography.css';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: '텍스트 입력 필드로, 최대 길이를 설정할 수 있으며 카운터를 표시할 수 있습니다.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: '입력 필드의 값',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더',
      defaultValue: '텍스트 입력...',
    },
    maxLength: {
      control: 'number',
      description: '최대 입력 가능 글자 수',
      defaultValue: 20,
    },
    showCounter: {
      control: 'boolean',
      description: '입력된 글자 수 카운터 표시 여부',
      defaultValue: true,
    },
    onChange: { action: '입력값 변경됨', description: '입력 값이 변경될 때 호출되는 핸들러' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: '텍스트 입력...',
    maxLength: 20,
    showCounter: true,
  },
};

export const Styled: Story = {
  args: {
    ...Default.args,
    className: typography.heading4,
  },
};
