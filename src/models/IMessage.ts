export interface IMessage {
  id: string;
  text: string;
  ownership: MessageOwnership;
}

export enum MessageOwnership {
  OWN = 'own',
  FOREIGN = 'foreign'
}