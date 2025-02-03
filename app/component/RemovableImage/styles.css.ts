import { style } from '@vanilla-extract/css';
import { colors } from 'src/vanilla-extract/theme.css';

const container = style({
  position: 'relative',
  width: '80px',
  aspectRatio: '1/1',
});

const removeButton = style({
  position: 'absolute',
  top: '-8px',
  right: '-8px',
  aspectRatio: '1/1',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: colors.warmGray[200],
  color: colors.warmGray[800],
  borderRadius: '50%',
});

const imageContainer = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  overflow: 'hidden',
  borderRadius: '2px',
});

const styles = {
  container,
  removeButton,
  imageContainer,
};

export default styles;
