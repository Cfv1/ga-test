import {IServerAccount} from 'src/store/services/models/IServerAccount';
import {AccountState} from 'src/store/services/models/AccountState';

export const convertServerAccountStateToClient = (data: IServerAccount): AccountState => data.stateInstance;