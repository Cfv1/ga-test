import {common} from '@mui/material/colors';

import {
  CORNER_DEFAULT,
  MESSAGE_DEFAULT,
  MESSAGE_ROOT_DEFAULT
} from '../common/styles';

const color = common.white;

export const MESSAGE_ROOT = {
  ...MESSAGE_ROOT_DEFAULT,
  justifyContent: 'flex-start'
}

export const MESSAGE = {
  ...MESSAGE_DEFAULT,
  background: color,
  borderTopLeftRadius: 0,
}

export const CORNER = {
  ...CORNER_DEFAULT,
  borderTopColor: color,
  borderLeft: '10px solid transparent',
  left: '-8px',
}