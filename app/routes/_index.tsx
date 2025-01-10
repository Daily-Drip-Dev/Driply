import type { MetaFunction } from '@remix-run/node';
import HomeLayout from '~/layout/HomeLayout';

export const meta: MetaFunction = () => {
  return [
    { title: 'Driply' },
    {
      name: 'description',
      content:
        'Driply는 커피 애호가를 위한 스마트한 기록 및 추천 플랫폼입니다. 마신 커피를 평가하고 기록하며, 카페를 공유하고 주변의 핫한 카페를 추천받아 나만의 커피 취향을 완성해보세요!',
    },
    {
      name: 'keywords',
      content:
        '커피, 커피 기록, 커피 추천, 카페 추천, 커피 평가, Driply, 커피 애호가, 카페 탐방, 커피 취향, 카페 공유, 커피 플랫폼, 커피 리뷰',
    },
  ];
};

export default function Index() {
  return <HomeLayout />;
}
