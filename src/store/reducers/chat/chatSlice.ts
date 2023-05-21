import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {receiveNotification} from 'src/store/services/message';
import {IChat} from 'src/models/IChat';
import {WebhookType} from 'src/models/INotification';
import {MessageOwnership} from 'src/models/IMessage';
import {IContact} from 'src/models/IContact';
import {createContactWithId} from 'src/store/helpers/creators/contact';
import {createMessage} from 'src/store/reducers/chat/helpers';

export interface IChatState {
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
