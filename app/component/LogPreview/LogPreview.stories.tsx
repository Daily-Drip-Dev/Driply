import type { Meta, StoryObj } from "@storybook/react";
import LogPreview from ".";

const meta: Meta<typeof LogPreview> = {
  title: "Components/LogPreview",
  component: LogPreview,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "LogPreview 컴포넌트는 장소, 제목, 이미지 URL을 받아 간단한 콘텐츠 프리뷰를 보여줍니다.",
      },
    },
  },
  argTypes: {
    place: {
      control: "text",
      description: "LogPreview의 위치 텍스트",
    },
    title: {
      control: "text",
      description: "LogPreview의 제목 텍스트",
    },
    imageUrl: {
      control: "text",
      description: "프리뷰에 표시할 이미지 URL",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", maxWidth: "500px" }}>
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
    place: "단일커피",
    title: "아이스 아메리카노",
    imageUrl: "https://via.placeholder.com/60",
  },
};

export const NoImage: Story = {
  name: "이미지가 없는 상태",
  args: {
    place: "홈 카페",
    title: "진짜 맛있게 내린 홈 브루잉 커피",
  },
};
