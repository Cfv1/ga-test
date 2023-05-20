import React, {memo} from 'react';
import {Box} from '@mui/material';
import Chat from 'src/components/Messenger/parts/Chat/Chat';
import Contacts from 'src/components/Messenger/parts/Contacts/Contacts';
import {MESSENGER_CONTAINER, MESSENGER_WINDOW} from './styles';

const Messenger = () => {
  return (
    <Box sx={MESSENGER_CONTAINER}>
      <Box sx={MESSENGER_WINDOW}>
        <Contacts />
        <Chat/>
      </Box>
    </Box>
  )
}

export default memo(Messenger);