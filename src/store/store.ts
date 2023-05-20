import {configureStore} from '@reduxjs/toolkit';
import MessageSlice from 'src/store/reducers/message/messageSlice';
import AccountSlice from 'src/store/reducers/account/accountSlice';

export const store = configureStore({
  reducer: {
    messageReducer: MessageSlice.reducer,
    accountReducer: AccountSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;