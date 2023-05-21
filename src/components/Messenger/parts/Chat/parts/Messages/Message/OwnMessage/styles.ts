import {
  CORNER_DEFAULT,
  MESSAGE_DEFAULT,
  MESSAGE_ROOT_DEFAULT
} from 'src/components/Messenger/parts/Chat/parts/Messages/Message/common/styles';

const color = '#D9FDD3';

export const MESSAGE_ROOT = {
  ...MESSAGE_ROOT_DEFAULT,
  justifyContent: 'flex-end'
}

export const MESSAGE = {
  ...MESSAGE_DEFAULT,
  background: color,
  borderTopRightRadius: 0,
}

export const CORNER = {
  ...CORNER_DEFAULT,
  borderTopColor: color,
  borderRight: '10px solid transparent',
  right: '-8px',
}