import API from 'src/store/services/base/axios';
import {IServerAccount} from 'src/store/services/models/IServerAccount';
import {convertServerAccountStateToClient} from 'src/store/services/converters/account';
import {IAccount} from 'src/models/IAccount';
import {createAppAsyncThunk} from 'src/store/helpers/createAppAsyncThunk';
import {AccountState} from 'src/store/services/models/AccountState';

export const getAccountState = createAppAsyncThunk<AccountState, IAccount>()("account/getAccountState", async (data, {rejectWithValue}) => {
  const {apiTokenInstance, idInstance} = data;

  try {
    const response = await API.get<IServerAccount>(`/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
    return convertServerAccountStateToClient(response.data);
  } catch (error) {
    return rejectWithValue('Не удалось загрузить');
  }
});