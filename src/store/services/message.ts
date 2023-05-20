import API from 'src/store/services/base/axios';
import {createAppAsyncThunk} from 'src/store/helpers/createAppAsyncThunk';

export const sendMessage = createAppAsyncThunk("message/sendMessage", async (_, {rejectWithValue, getState}) => {
  const {accountReducer} = getState();
  const {account} = accountReducer;

  try {
    const response = await API.post(`/waInstance${account?.idInstance}/SendMessage/${account?.apiTokenInstance}`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить');
  }
});

export const receiveNotification = createAppAsyncThunk("message/receiveNotification", async (_, {rejectWithValue, getState}) => {
  const {accountReducer} = getState();
  const {account} = accountReducer;

  try {
    const response = await API.get(`/waInstance${account?.idInstance}/ReceiveNotification/${account?.apiTokenInstance}`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить');
  }
});

export const deleteNotification = createAppAsyncThunk("message/deleteNotification", async (_, {rejectWithValue, getState}) => {
  const {accountReducer} = getState();
  const {account} = accountReducer;

  try {
    const response = await API.delete(`/waInstance${account?.idInstance}/DeleteNotification/${account?.apiTokenInstance}`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить');
  }
});
