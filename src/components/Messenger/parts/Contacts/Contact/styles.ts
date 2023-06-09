import {grey} from '@mui/material/colors';
import {theme} from 'src/common/theme';
import {hexToRgba} from 'src/common/helpers/hexToRgba';

const contact_default = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderBottom: `1px solid ${grey[200]}`,
  padding: '5px 0',
  cursor: 'pointer',
}

export const CONTACT = {
  ...contact_default,
  ':hover': {
    backgroundColor: hexToRgba(theme.palette.background.default, 0.4),
  },
}

export const CONTACT_ACTIVE = {
  ...contact_default,
  backgroundColor: theme.palette.background.default
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