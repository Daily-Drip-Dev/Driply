import type { Meta, StoryObj } from '@storybook/react';
import ActionHeader from '.';
import { MdMoreVert } from 'react-icons/md';

const meta: Meta<typeof ActionHeader> = {
  title: 'Components/ActionHeader',
  component: ActionHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '`ActionHeader`는 중앙 및 오른쪽 콘텐츠와 뒤로 가기 버튼을 포함한 헤더 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    onBack: {
      action: 'clicked',
      description: '뒤로 가기 버튼 클릭 시 호출되는 함수입니다.',
    },
    children: {
      description: '헤더에 렌더링할 `CenterContent`와 `RightContent`입니다.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 430 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 상태',
  args: {
    children: [
      <ActionHeader.CenterContent key={'center'}>중앙 텍스트</ActionHeader.CenterContent>,
      <ActionHeader.RightContent key={'right'}>
        <button>옵션</button>
      </ActionHeader.RightContent>,
    ],
  },
};

export const WithoutRightContent: Story = {
  name: '오른쪽 콘텐츠 없음',
  args: {
    children: <ActionHeader.CenterContent>중앙 텍스트만 표시</ActionHeader.CenterContent>,
  },
};

export const CustomBackAction: Story = {
  name: '커스텀 뒤로 가기 액션',
  args: {
    onBack: () => alert('뒤로 가기 버튼 클릭됨!'),
    children: [
      <ActionHeader.CenterContent key={'center'}>뒤로 가기 커스텀</ActionHeader.CenterContent>,
      <ActionHeader.RightContent key={'right'}>
        <button>설정</button>
      </ActionHeader.RightContent>,
    ],
  },
};

export const DetailHeader: Story = {
  name: 'Detail 페이지에서 사용될 헤더',
  args: {
    onBack: () => alert('뒤로 가기 버튼 클릭됨!'),
    children: [
      <ActionHeader.CenterContent key={'center'}>
        <div>
          <div>센터커피 서울숲점</div>
          <div style={{ fontSize: '26px', fontWeight: 'bold' }}>아이스 드립커피</div>
        </div>
      </ActionHeader.CenterContent>,
      <ActionHeader.RightContent key={'right'}>
        <div style={{ position: 'relative', width: '18px', height: '24px' }}>
          <MdMoreVert
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              fontSize: '36px',
            }}
          />
        </div>
      </ActionHeader.RightContent>,
    ],
  },
};
