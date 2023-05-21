import React, {memo} from 'react';
import {Box} from '@mui/material';

import {CORNER, MESSAGE, MESSAGE_ROOT} from './styles';
import {IMessageProps} from '../common/types';

const OwnMessage = (props: IMessageProps) => {
  const {text} = props;

  return (
    <Box sx={MESSAGE_ROOT}>
      <Box sx={MESSAGE}>
        <Box sx={CORNER}/>
        {text}
      </Box>
    </Box>
  )
}

export default memo(OwnMessage);