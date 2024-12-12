import type { Meta, StoryObj } from "@storybook/react";
import LogsMain from ".";

const meta: Meta<typeof LogsMain> = {
  title: "Components/LogsMain",
  component: LogsMain,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "`LogsMain` 컴포넌트는 사용자의 커피 로그 리스트를 GraphQL API로 가져와 `LogPreview`를 렌더링합니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 상태",
};
