import type { Meta, StoryObj } from "@storybook/react";
import LogsHeader from ".";

const meta: Meta<typeof LogsHeader> = {
  title: "Components/LogsHeader",
  component: LogsHeader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "LogsHeader 컴포넌트는 페이지 헤더로, 제목과 아이콘 버튼을 포함합니다.",
      },
    },
  },
  argTypes: {
    onIconClick: {
      action: "clicked",
      description: "아이콘 버튼이 클릭되었을 때 호출되는 함수입니다.",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "450px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 상태",
  args: {
    children: "My Logs",
    onIconClick: () => alert("아이콘 버튼 클릭"),
  },
};
