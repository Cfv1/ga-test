import {Box} from '@mui/material';
import React, { memo } from 'react';
import {CHAT_CONTAINER} from './styles';
import {IContact} from 'src/models/IContact';

interface IChatProps {
  contact?: IContact;
}

const Chat = (props: IChatProps) => {
  const {contact} = props;

  if(!contact) {
    return (
      <Box width="70%" />
    )
  }

  return (
    <Box width="70%" sx={CHAT_CONTAINER}>
      {contact.name} {contact.phone}
    </Box>
  )
}

export default memo(Chat);