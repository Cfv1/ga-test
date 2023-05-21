import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'src/store/store';

const selectState = (state: RootState) => state.chatReducer;

export const selectChats = createSelector(
  selectState,
  (state) => state.chats);
