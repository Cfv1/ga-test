import {useMemo} from 'react';
import {bindActionCreators} from '@reduxjs/toolkit';

import {useAppDispatch} from 'src/store/helpers/hooks/useAppDispatch';
import MessageSlice from 'src/store/reducers/message/messageSlice';
import AccountSlice from 'src/store/reducers/account/accountSlice';

const actions = {
  ...AccountSlice.actions,
  ...MessageSlice.actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
