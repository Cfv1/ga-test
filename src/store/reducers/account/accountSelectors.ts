import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'src/store/store';

const selectState = (state: RootState) => state.accountReducer;

const selectAll = createSelector(
  selectState,
  (state) => ({
      account: state.account,
      communication: state.communication
  }));

export const selectAccount = createSelector(
  selectAll,
  (state) => state.account
);

export const selectCommunication = createSelector(
  selectAll,
  (state) => state.communication
);