import { style } from '@vanilla-extract/css';

const stepContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '0 32px',
});

const buttonContainer = style({
  padding: '4px 32px 32px 32px',
  width: '100%',
});

const button = style({
  width: '100%',
});

const styles = { stepContainer, buttonContainer, button };
export default styles;
