import type { Meta, StoryObj } from "@storybook/react";
import Fallback from ".";

const meta: Meta<typeof Fallback> = {
  title: "Components/Fallback",
  component: Fallback,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "`Fallback` 컴포넌트는 자식 요소와 함께 버튼을 렌더링하며, 버튼 클릭 이벤트를 처리합니다.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "컴포넌트 내에서 렌더링할 콘텐츠입니다.",
      defaultValue: "Fallback 상태입니다.",
    },
    buttonText: {
      control: "text",
      description: "버튼에 표시할 텍스트입니다.",
      defaultValue: "Retry",
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
    children: "문제가 발생했습니다.",
    buttonText: "다시 시도",
  },
};

export const CustomContent: Story = {
  name: "커스텀 콘텐츠",
  args: {
    children: <p>네트워크 오류가 발생했습니다. 다시 시도해주세요.</p>,
    buttonText: "재접속",
  },
};
