import {Box} from '@mui/material';
import React, {memo, useEffect} from 'react';
import {CHAT_CONTAINER} from './styles';
import {IContact} from 'src/models/IContact';
import Header from 'src/components/Messenger/parts/Chat/parts/Header/Header';
import Footer from 'src/components/Messenger/parts/Chat/parts/Footer/Footer';
import Messages from 'src/components/Messenger/parts/Chat/parts/Messages/Messages';
import {useAppDispatch} from 'src/store/helpers/hooks/useAppDispatch';
import {deleteNotification, receiveNotification} from 'src/store/services/message';
import {INotification} from 'src/models/INotification';

interface IChatProps {
  contact?: IContact;
}

const Chat = (props: IChatProps) => {
  const {contact} = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    let intervalId = setInterval(() => {
      try {
        dispatch(receiveNotification()).then(response => {
          const data = (response.payload as INotification | null);
          if(data) {
            dispatch(deleteNotification(data.receiptId));
          }
        });
      } catch (e) {
        console.log(e);
      }
    }, 5000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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