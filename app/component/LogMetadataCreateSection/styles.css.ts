import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  width: '100%',
});

const styles = {
  container,
};

export default styles;
