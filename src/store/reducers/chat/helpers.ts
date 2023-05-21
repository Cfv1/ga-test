import {IChat} from 'src/models/IChat';
import {IMessage, MessageOwnership} from 'src/models/IMessage';
import {INotification, MessageDataType} from 'src/models/INotification';
import {IChatState} from './chatSlice';

const saveMessage = (chat: IChat, message: IMessage) => {
  const newMessage = chat.messages.find(i => i.id === message.id);
  !newMessage && chat.messages.push(message);
}

export const createMessage = (state: IChatState, data: INotification, sender: MessageOwnership) => {
  const chatId = data.body.senderData!.chatId;
  const chat = state.chats.find(chat => chat.chatId === chatId);
  const messageData = data.body.messageData;
  let message: IMessage = {
    id: data.body.idMessage,
    ownership: sender,
    text: ''
  }

  if(messageData.typeMessage === MessageDataType.TEXT_MESSAGE || messageData.typeMessage === MessageDataType.EXTENDED_TEXT_MESSAGE) {
    message.text =
      messageData.typeMessage === MessageDataType.TEXT_MESSAGE
        ? messageData.textMessageData!.textMessage
        : messageData.extendedTextMessageData!.text
  } else {
    message.text = '**Нераспознанное сообщение :(**'
  }

  if(chat) {
    saveMessage(chat, message);
  }
}