import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

const buttonContainer = style({
  padding: '4px 32px',
  width: '100%',
});

const button = style({
  width: '100%',
});

const styles = { container, buttonContainer, button };
export default styles;
