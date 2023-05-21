import React, {ChangeEvent, memo, useState} from 'react';
import {Box, TextField} from '@mui/material';
import {FOOTER, MESSAGE_FIELD} from './styles';
import {ChatProps} from 'src/components/Messenger/parts/Chat/Chat';
import {useAppDispatch} from 'src/store/helpers/hooks/useAppDispatch';
import {sendMessage} from 'src/store/services/message';

const Footer = (props: ChatProps) => {
  const {contact} = props;

  const [currentMessage, setCurrentMessage] = useState('');

  const dispatch = useAppDispatch();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentMessage(event.target.value);
  }

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      dispatch(sendMessage({message: currentMessage, chatId: contact.chatId}))
      setCurrentMessage('');
    }
  }

  return (
    <Box sx={FOOTER}>
      <TextField
        value={currentMessage}
        variant="standard"
        InputProps={{
          disableUnderline: true,
          style: {
            padding: '0 15px',
            height: '40px',
            fontSize: '15px'
          }
        }}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        placeholder="Введите сообщение"
        sx={MESSAGE_FIELD}/>
    </Box>
  )
}

export default memo(Footer);