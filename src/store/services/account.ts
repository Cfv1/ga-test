import {createAsyncThunk} from '@reduxjs/toolkit';
import API from 'src/store/services/base/axios';
import {IServerAccount} from 'src/store/services/models/IServerAccount';
import {convertServerAccountStateToClient} from 'src/store/services/converters/account';
import {IAccount} from 'src/models/IAccount';

export const getAccountState = createAsyncThunk("account/getAccountState", async (data: IAccount, {rejectWithValue}) => {
  const {apiTokenInstance, idInstance} = data;

  try {
    const response = await API.get<IServerAccount>(`/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
    return convertServerAccountStateToClient(response.data);
  } catch (error) {
    return rejectWithValue('Не удалось загрузить');
  }
});