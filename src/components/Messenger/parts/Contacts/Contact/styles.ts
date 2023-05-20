import {grey} from '@mui/material/colors';

export const CONTACT = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: `1px solid ${grey[200]}`,
  padding: '5px 0',
  cursor: 'pointer',
  ':hover': {
    background: grey[200]
  }
}

export const AVATAR = {
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginRight: '15px'
}

export const DEFAULT_AVATAR = {
  width: '100%',
  height: '100%',
  color: grey[400],
  opacity: 0.5,
}