import {grey} from '@mui/material/colors';
import {theme} from 'src/common/theme';
import {hexToRgba} from 'src/common/helpers/hexToRgba';

export const STRUCTURE_DEFAULT = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '40px',
  borderBottom: `1px solid ${grey[200]}`,
  padding: '5px 0',
  backgroundColor: theme.palette.background.default,
}

export const AVATAR = {
  padding: '0 15px',
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
}

export const DEFAULT_AVATAR = {
  width: '100%',
  height: '100%',
  color: hexToRgba(grey[400], 0.5)
}