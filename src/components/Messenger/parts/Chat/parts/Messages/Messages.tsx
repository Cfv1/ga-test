import React, {memo} from 'react';
import {Box} from '@mui/material';
import {MESSAGES_CONTAINER} from 'src/components/Messenger/parts/Chat/parts/Messages/styles';
import OwnMessage from 'src/components/Messenger/parts/Chat/parts/Messages/Message/OwnMessage/OwnMessage';
import ForeignMessage from 'src/components/Messenger/parts/Chat/parts/Messages/Message/ForeignMessage/ForeignMessage';

const Messages = () => {
  return (
    <Box sx={MESSAGES_CONTAINER}>
      <OwnMessage text="Testik" />
      <ForeignMessage text="Textik" />
    </Box>
  )
}

export default memo(Messages);