import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  justifyContent: 'center',
  alignItems: 'center',

  margin: '24px 0',
});

export const styles = {
  container,
};
