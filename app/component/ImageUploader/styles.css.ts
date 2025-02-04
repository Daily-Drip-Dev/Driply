import { style } from '@vanilla-extract/css';
import { colors } from 'src/vanilla-extract/theme.css';

const container = style({
  position: 'relative',
  width: '80px',
  aspectRatio: '1/1',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: colors.warmGray[100],
  borderRadius: '2px',

  color: colors.warmGray[800],
});

const icon = style({
  fontSize: '24px',
});

const input = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
});

const disabled = style({
  color: colors.warmGray[400],
});

const styles = {
  container,
  icon,
  input,
  disabled,
};

export default styles;
