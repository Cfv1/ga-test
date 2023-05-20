import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICommunication} from 'src/models/common/ICommunication';
import {IAccount} from 'src/models/IAccount';
import {getAccountState} from 'src/store/services/account';
import {AccountState} from 'src/store/services/models/AccountState';

interface IAccountState {
  account: IAccount | null;
  communication: ICommunication;
}

const initialState: IAccountState = {
  account: null,
  communication: {
    isRequesting: false,
    isSuccess: false
  }
}

const AccountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccountState.pending, (state) => {
      state.communication.isRequesting = true;
      state.communication.isSuccess = false;
      state.communication.error = undefined;
    });
    builder.addCase(getAccountState.fulfilled, (state, action) => {
      state.communication.isRequesting = false;
      switch (action.payload) {
        case AccountState.AUTHORIZED:  {
          state.communication.isSuccess = true;
          state.account = action.meta.arg;
          break;
        }
        case AccountState.BLOCKED:
        case AccountState.NOT_AUTHORIZED:
        case AccountState.SLEEP_MODE:
        case AccountState.STARTING:
        default: {
          state.communication.isSuccess = false;
          state.communication.error = 'Ошибка загрузки аккаунта'
        }
      }
    });
    builder.addCase(getAccountState.rejected, (state, action: PayloadAction<unknown>) => {
      state.communication.isRequesting = false;
      state.communication.isSuccess = false;
      typeof action.payload === 'string' && (state.communication.error = action.payload);
    });
  }
});

export default AccountSlice;
