import {useMemo} from 'react';
import {bindActionCreators} from '@reduxjs/toolkit';

import {useAppDispatch} from 'src/store/helpers/hooks/useAppDispatch';
import AccountSlice from 'src/store/reducers/account/accountSlice';
import ContactSlice from 'src/store/reducers/contact/contactSlice';
import ChatSlice from 'src/store/reducers/chat/chatSlice';

const actions = {
  ...AccountSlice.actions,
  ...ChatSlice.actions,
  ...ContactSlice.actions
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
