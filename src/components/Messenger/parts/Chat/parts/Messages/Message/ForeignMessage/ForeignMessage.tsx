import React, {memo} from 'react';
import {Box} from '@mui/material';
import {
  CORNER,
  MESSAGE,
  MESSAGE_ROOT
} from './styles';
import {IMessageProps} from 'src/components/Messenger/parts/Chat/parts/Messages/Message/common/types';

const ForeignMessage = (props: IMessageProps) => {
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

export default memo(ForeignMessage);