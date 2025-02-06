import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  fontFamily: 'Noto Sans KR, sans-serif',
  color: '#12100E',
});

globalStyle('svg', {
  verticalAlign: 'middle',
});

globalStyle('h1', {
  fontSize: '32px',
  lineHeight: '140%',
  fontWeight: 900,
});

globalStyle('h2', {
  fontSize: '26px',
  lineHeight: '130%',
  fontWeight: 700,
});

globalStyle('h3', {
  fontSize: '22px',
  lineHeight: '120%',
  fontWeight: 500,
});

globalStyle('h4', {
  fontSize: '20px',
  lineHeight: '130%',
  fontWeight: 500,
});

globalStyle('h5', {
  fontSize: '18px',
  lineHeight: '130%',
  fontWeight: 500,
});

globalStyle('p', {
  fontSize: '16px',
  lineHeight: '130%',
  fontWeight: 400,
});

globalStyle('::-webkit-scrollbar', {
  width: '10px',
  height: '10px',
});

globalStyle('::-webkit-scrollbar-track', {
  background: '#f1f1f1',
  borderRadius: '5px',
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: '#C4BDB2',
  borderRadius: '5px',
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  background: '#998D7B',
});
