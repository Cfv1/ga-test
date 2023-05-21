import API from 'src/store/services/base/axios';
import {createAppAsyncThunk} from 'src/store/helpers/createAppAsyncThunk';
import {ISendMessage} from 'src/models/ISendMessage';
import {INotification} from 'src/models/INotification';
import {ISendMessageResponse} from 'src/store/services/models/ISendMessageResponse';

export const sendMessage = createAppAsyncThunk<ISendMessageResponse, ISendMessage>()("message/sendMessage", async (data, {rejectWithValue, getState}) => {
  const {accountReducer} = getState();
  const {account} = accountReducer;

  try {
    const response = await API.post<ISendMessageResponse>(`/waInstance${account?.idInstance}/SendMessage/${account?.apiTokenInstance}`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить');
  }
});

export const receiveNotification = createAppAsyncThunk<INotification | null>()("message/receiveNotification", async (_, {rejectWithValue, getState}) => {
  const {accountReducer} = getState();
  const {account} = accountReducer;

  try {
    const response = await API.get<INotification>(`/waInstance${account?.idInstance}/ReceiveNotification/${account?.apiTokenInstance}`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить');
  }
});

export const deleteNotification = createAppAsyncThunk<void, number>()("message/deleteNotification", async (messageId: number, {rejectWithValue, getState}) => {
  const {accountReducer} = getState();
  const {account} = accountReducer;

  try {
    const response = await API.delete(`/waInstance${account?.idInstance}/DeleteNotification/${account?.apiTokenInstance}/${messageId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить');
  }
});
