import {Box} from '@mui/material';
import React, {memo} from 'react';
import {CHAT_CONTAINER} from './styles';
import {IContact} from 'src/models/IContact';
import Header from 'src/components/Messenger/parts/Chat/parts/Header/Header';
import Footer from 'src/components/Messenger/parts/Chat/parts/Footer/Footer';
import Messages from 'src/components/Messenger/parts/Chat/parts/Messages/Messages';

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
      <Header contact={contact} />
      <Messages />
      <Footer />
    </Box>
  )
}

export default memo(Chat);