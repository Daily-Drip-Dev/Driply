import { keyframes, style } from '@vanilla-extract/css';

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  animation: `${spin} 1s linear infinite`,
});

const styles = {
  container,
  size: {
    sm: style({
      width: '20px',
      aspectRatio: '1/1',
      fontSize: '16px',
    }),
    md: style({
      width: '36px',
      aspectRatio: '1/1',
      fontSize: '32px',
    }),
    lg: style({
      width: '52px',
      aspectRatio: '1/1',
      fontSize: '48px',
    }),
  },
};

export default styles;
