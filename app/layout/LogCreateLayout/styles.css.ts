import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

const button = style({
  width: '100%',
});

const styles = { container, button };
export default styles;
