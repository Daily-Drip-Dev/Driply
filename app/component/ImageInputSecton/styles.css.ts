import { style } from '@vanilla-extract/css';

const container = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '12px',
  padding: '8px 0px',

  width: 'fit-content',
  maxWidth: '100%',
});

const styles = {
  container,
};

export default styles;
