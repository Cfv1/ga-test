import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContact} from 'src/models/IContact';

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
    createContact: (state, action: PayloadAction<IContact>) => {
      const data = action.payload;
      state.contacts.push(data);
    }
  },
});

export default ContactSlice;
