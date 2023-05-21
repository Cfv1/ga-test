import {Box} from '@mui/material';
import React, {memo} from 'react';

import {IContact} from 'src/models/IContact';
import Header from './parts/Header/Header';
import Footer from './parts/Footer/Footer';
import Messages from './parts/Messages/Messages';
import {CHAT_CONTAINER} from './styles';

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
      <Messages contact={contact} />
      <Footer contact={contact} />
    </Box>
  )
}

export default memo(Chat);
export type ChatProps = Required<IChatProps>