import {IMessage} from 'src/models/IMessage';

export interface IChat {
  chatId: string;
  messages: IMessage[];
}