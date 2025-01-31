import { style, styleVariants } from '@vanilla-extract/css';
import { colors } from 'src/vanilla-extract/theme.css';
import { typography } from 'src/vanilla-extract/typography.css';

export const scoreDialContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '8px',
  textAlign: 'center',
  width: '300px',
});

export const labelContainer = style({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '3px',
  marginBottom: '20px',
  color: colors.warmGray[900],
});

export const labelDescription = style({
  fontSize: typography.small,
  color: colors.warmGray[700],
});

export const tuningScale = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
});

export const markContainer = style({
  position: 'relative',
  height: '62px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
});

export const pointer = style({
  position: 'absolute',
  top: '-12px',
  left: '50%',
  width: '0',
  height: '0',
  borderLeft: '4px solid transparent',
  borderRight: '4px solid transparent',
  borderBottom: `6px solid ${colors.base.orange}`,
  transform: 'translateX(-50%) rotate(180deg)',
});

export const markBase = style({
  width: '2px',
  transition: 'background 0.2s',
});

export const mark = styleVariants({
  small: [markBase, { height: '24px', background: colors.warmGray[300], marginTop: '70%' }],
  large: [markBase, { height: '100%', width: '3px', marginTop: '0', backgroundColor: colors.warmGray[500] }],
});

export const selectedMark = style({
  backgroundColor: colors.base.orange,
});

export const number = style({
  fontSize: '14px',
  marginTop: '5px',
  color: colors.warmGray[400],
});

export const selectedNumber = style({
  color: colors.warmGray[900],
});

export const rangeInput = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '64px',
  zIndex: 1,
  background: 'transparent',
  opacity: 0,
  cursor: 'pointer',

  selectors: {
    '&::-webkit-slider-thumb': {
      width: '36px',
      height: '36px',
      background: 'transparent',
    },
    '&::-moz-range-thumb': {
      width: '36px',
      height: '36px',
      background: 'transparent',
    },
  },
});
