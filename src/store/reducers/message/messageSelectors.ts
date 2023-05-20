import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'src/store/store';

const selectState = (state: RootState) => state.messageReducer;

const selectAll = createSelector(
  selectState,
  (state) => ({

}));
