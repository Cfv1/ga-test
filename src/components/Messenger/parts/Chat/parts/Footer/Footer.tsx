import React, {memo} from 'react';
import {Box, TextField} from '@mui/material';
import {FOOTER, MESSAGE_FIELD} from './styles';

const Footer = () => {
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log('do validate')
    }
  }

  return (
    <Box sx={FOOTER}>
      <TextField
        variant="standard"
        InputProps={{
          disableUnderline: true,
          style: {
            padding: '0 15px',
            height: '40px',
            fontSize: '15px'
          }
        }}
        onKeyDown={handleKeyDown}
        placeholder="Введите сообщение"
        sx={MESSAGE_FIELD}/>
    </Box>
  )
}

export default memo(Footer);