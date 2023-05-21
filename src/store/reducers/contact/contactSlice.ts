import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContact} from 'src/models/IContact';
import {generateChatId} from 'src/common/helpers/generateChatId';
import {IContactInfo} from 'src/models/IContactInfo';

interface IContactState {
  contacts: IContact[];
}

const initialState: IContactState = {
  contacts: []
}

const ContactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    createContact: (state, action: PayloadAction<IContactInfo>) => {
      const data = action.payload;
      state.contacts.push({...data, chatId: generateChatId(data.phone)});
    }
  },
});

export default ContactSlice;
