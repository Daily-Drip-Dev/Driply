import { style } from '@vanilla-extract/css';
import { colors } from 'src/vanilla-extract/theme.css';

const container = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const textarea = style({
  width: '100%',
  padding: '12px',
  borderRadius: '2px',
  backgroundColor: colors.warmGray[100],
  color: colors.warmGray[800],
  '::placeholder': {
    color: colors.warmGray[600],
  },
});

const counter = style({
  alignSelf: 'flex-end',
  color: colors.warmGray[800],
});

const styles = {
  container,
  textarea,
  counter,
};

export default styles;
