import React, {memo, useEffect, useMemo} from 'react';
import {Box} from '@mui/material';

import {MessageOwnership} from 'src/models/IMessage';
import {ChatProps} from 'src/components/Messenger/parts/Chat/Chat';
import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectChats} from 'src/store/reducers/chat/chatSelectors';
import {scrollToBottom} from 'src/common/helpers/scrollToBottom';
import OwnMessage from '../Messages/Message/OwnMessage/OwnMessage';
import ForeignMessage from '../Messages/Message/ForeignMessage/ForeignMessage';
import {
  MESSAGES_CONTAINER,
  SCROLLABLE_MESSAGES_CONTAINER
} from './styles';

const Messages = (props: ChatProps) => {
  const {contact} = props;

  const chats = useAppSelector(selectChats);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const currentChat = useMemo(() => chats.find(chat => chat.chatId === contact.chatId), [chats, contact.chatId])

  return (
    <Box sx={MESSAGES_CONTAINER}>
      <Box sx={SCROLLABLE_MESSAGES_CONTAINER} id="scrollable">
        {currentChat?.messages.map(message => {
          const Component = message.ownership === MessageOwnership.OWN ? OwnMessage : ForeignMessage;
          return <Component key={message.id} text={message.text} />
        })}
      </Box>
    </Box>
  )
}

export default memo(Messages);