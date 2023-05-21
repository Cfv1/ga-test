export enum WebhookType {
  INCOMING_MESSAGE_RECEIVED = 'incomingMessageReceived',
  OUTGOING_MESSAGE_RECEIVED = 'outgoingMessageReceived',
  OUTGOING_API_MESSAGE_RECEIVED = 'outgoingAPIMessageReceived',
  OUTGOING_MESSAGE_STATUS = 'outgoingMessageStatus',
}

export interface INotification {
  receiptId: number;
  body: INotificationBody;
}

interface INotificationBody {
  idMessage: string;
  typeWebhook: WebhookType;
  senderData?: ISenderData;
  messageData: IMessageData;
}

interface ISenderData {
  chatId: string;
  chatName: string;
  sender: string;
  senderName: string;
}

export enum MessageDataType {
  TEXT_MESSAGE = 'textMessage',
  EXTENDED_TEXT_MESSAGE = 'extendedTextMessage',
}

interface IMessageData {
  textMessageData?: ITextMessageData;
  extendedTextMessageData?: IExtendedTextMessageData;
  typeMessage: MessageDataType;
}

interface ITextMessageData {
  textMessage: string;
}

interface IExtendedTextMessageData {
  text: string;
}
