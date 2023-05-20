import {Box} from '@mui/material';
import React, { memo } from 'react';
import {CHAT_CONTAINER} from './styles';

const Chat = () => {
  return (
    <Box width="70%" sx={CHAT_CONTAINER}/>
  )
}

export default memo(Chat);