import type { Meta, StoryObj } from "@storybook/react";
import Image from ".";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Image 컴포넌트는 이미지 로드, 로딩 중, 에러 상태를 처리할 수 있는 확장된 HTML 이미지 컴포넌트입니다.`,
      },
    },
  },
  argTypes: {
    isLoading: {
      control: "boolean",
      description: "이미지가 로딩 중인지 여부를 나타냅니다.",
    },
    isError: {
      control: "boolean",
      description: "이미지가 로드되지 않아 에러 상태인지 여부를 나타냅니다.",
    },
    src: {
      control: "text",
      description: "이미지 URL",
    },
    alt: {
      control: "text",
      description: "이미지 설명 (대체 텍스트)",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingState: Story = {
  name: "로딩 중 상태",
  args: {
    isLoading: true,
    src: "https://via.placeholder.com/200",
    alt: "로딩 중인 이미지",
  },
};

export const LoadedState: Story = {
  name: "로딩 완료 상태",
  args: {
    isLoading: false,
    isError: false,
    src: "https://via.placeholder.com/200",
    alt: "이미지가 로드된 상태",
  },
};

export const ErrorState: Story = {
  name: "에러 상태",
  args: {
    isError: true,
    src: "",
    alt: "에러 상태의 이미지",
  },
};
