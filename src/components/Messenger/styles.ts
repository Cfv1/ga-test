import {grey} from '@mui/material/colors';
import {theme} from 'src/common/theme';

const messenger_default = {
  minWidth: theme.breakpoints.values.xs,
  maxWidth: theme.breakpoints.values.lg,
  height: '95%',
  background: theme.palette.background.default,
  position: 'absolute',
}

export const MESSENGER_CONTAINER = {
  ...messenger_default,
  width: '96%',
  top: 20,
  border: `1px solid ${grey[300]}`,
  boxShadow: '-1px -1px 15px rgba(0, 0, 0, 0.1), 1px 1px 5px rgba(0, 0, 0, 0.1)'
}

export const MESSENGER_CONTAINER_TABLET = {
  ...messenger_default,
  width: '100%',
  height: '100%',
  top: 0
}

export const MESSENGER_WINDOW = {
  display: 'flex',
  width: '100%',
  height: '100%',
}