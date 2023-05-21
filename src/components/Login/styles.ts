import {grey} from '@mui/material/colors';
import {theme} from 'src/common/theme';

export const FORM = {
  margin: '50px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 550,
  height: 'fit-content',
  padding: '30px 0 20px 0',
  backgroundColor: theme.palette.background.default,
  borderRadius: '5px',
  border: `1px solid ${grey[300]}`,
  boxShadow: 'rgba(0, 0, 0, 0.2) 5px 5px 15px',
}

export const LOGIN_BUTTON = {
  display: 'flex',
  alignSelf: 'flex-end',
  width: '30%',
}