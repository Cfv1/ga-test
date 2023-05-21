import {configureStore} from '@reduxjs/toolkit';
import AccountSlice from 'src/store/reducers/account/accountSlice';
import ContactSlice from 'src/store/reducers/contact/contactSlice';
import ChatSlice from 'src/store/reducers/chat/chatSlice';

export const store = configureStore({
  reducer: {
    accountReducer: AccountSlice.reducer,
    contactReducer: ContactSlice.reducer,
    chatReducer: ChatSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;