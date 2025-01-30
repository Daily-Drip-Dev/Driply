import { style } from '@vanilla-extract/css';
import { colors } from 'src/vanilla-extract/theme.css';

const container = style({
  width: '100%',
  height: '100%',
});

const inputContainer = style({
  padding: '16px 20px',
});

const cafeListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  height: 'calc(100% - 112px)',
  overflowY: 'scroll',
});

const cafeRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  padding: '12px 20px',
  borderBottom: `1px solid ${colors.warmGray[800]}`,
  color: colors.warmGray[800],
});

const flexCenterContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  color: colors.warmGray[800],
  padding: '20px',
});

const styles = {
  container,
  inputContainer,
  cafeListContainer,
  cafeRow,
  flexCenterContainer,
};

export default styles;
