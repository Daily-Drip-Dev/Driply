import { style } from '@vanilla-extract/css';
import { colors } from 'src/vanilla-extract/theme.css';

const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '60px',
  padding: '0 20px',
});

const leftButton = style({
  all: 'unset',
  position: 'relative',
  width: '18px',
  height: '100%',
  cursor: 'pointer',
});

const leftChevron = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '58px',
  color: colors.warmGray[800],
});

const centerContent = style({
  flex: 1,
  textAlign: 'center',
});

const rightContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const styles = { container, leftButton, leftChevron, centerContent, rightContent };
export default styles;
