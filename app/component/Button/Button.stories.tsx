import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "`Button` 컴포넌트는 기본 스타일과 `highlight`, `disabled` 상태를 관리하며, 사용자화 가능한 클래스 이름을 지원합니다.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "버튼 내부에 표시될 콘텐츠입니다.",
      defaultValue: "클릭",
    },
    highlight: {
      control: "boolean",
      description: "버튼이 강조 표시될지 여부를 나타냅니다.",
      defaultValue: true,
    },
    disabled: {
      control: "boolean",
      description: "버튼의 비활성화 여부를 나타냅니다.",
      defaultValue: false,
    },
    className: {
      control: "text",
      description: "추가적인 사용자 클래스 이름입니다.",
    },
    onClick: {
      action: "clicked",
      description: "버튼 클릭 시 호출되는 함수입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 상태",
  args: {
    children: "기본 버튼",
    highlight: true,
    disabled: false,
  },
};

export const Highlighted: Story = {
  name: "강조된 버튼",
  args: {
    children: "강조 버튼",
    highlight: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  name: "비활성화된 버튼",
  args: {
    children: "비활성 버튼",
    highlight: true,
    disabled: true,
  },
};
