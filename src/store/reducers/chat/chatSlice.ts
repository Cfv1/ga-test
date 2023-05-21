import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {receiveNotification} from 'src/store/services/message';
import {IChat} from 'src/models/IChat';
import {INotification, MessageDataType, WebhookType} from 'src/models/INotification';
import {IMessage, MessageOwnership} from 'src/models/IMessage';
import {IContact} from 'src/models/IContact';
import {createContactWithId} from 'src/store/helpers/creators/contact';

const saveMessage = (chat: IChat, message: IMessage) => {
  const newMessage = chat.messages.find(i => i.id === message.id);
  !newMessage && chat.messages.push(message);
}

const createMessage = (state: IChatState, data: INotification, sender: MessageOwnership) => {
  const chatId = data.body.senderData!.chatId;
  const chat = state.chats.find(chat => chat.chatId === chatId)!;
  const message: IMessage = {
    id: data.body.idMessage,
    text:
      data.body.messageData.typeMessage === MessageDataType.TEXT_MESSAGE
        ? data.body.messageData.textMessageData!.textMessage
        : data.body.messageData.extendedTextMessageData!.text,
    ownership: sender
  }

  saveMessage(chat, message);
}

interface IChatState {
  chats: IChat[]
}

const initialState: IChatState = {
  chats: [{
    chatId: createContactWithId({name: 'Vlad', phone: '79234040754'}).chatId,
    messages: []
  }]
}

const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createChat: (state, action: PayloadAction<IContact>) => {
      const data = action.payload;
      const chat: IChat = {
        chatId: data.chatId,
        messages: []
      }
      state.chats.push(chat);
    }
  },

  extraReducers: (builder) => {
    builder.addCase(receiveNotification.fulfilled, (state, action) => {
      const data = action.payload;
      if(!data) {
        return;
      }

      switch(data?.body.typeWebhook) {
        case WebhookType.INCOMING_MESSAGE_RECEIVED: {
          createMessage(state, data, MessageOwnership.FOREIGN);
          break;
        }
        case WebhookType.OUTGOING_API_MESSAGE_RECEIVED:
        case WebhookType.OUTGOING_MESSAGE_RECEIVED: {
          createMessage(state, data, MessageOwnership.OWN);
          break;
        }

        case WebhookType.OUTGOING_MESSAGE_STATUS:
        default: {
          break;
        }
      }
    })
  }
});

export default ChatSlice;
