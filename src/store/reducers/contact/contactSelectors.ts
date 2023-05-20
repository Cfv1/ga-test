import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'src/store/store';

const selectState = (state: RootState) => state.contactReducer;

export const selectContacts = createSelector(
  selectState,
  (state) => state.contacts
);
