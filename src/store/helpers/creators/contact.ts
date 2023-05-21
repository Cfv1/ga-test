import {IContact} from 'src/models/IContact';
import {IContactInfo} from 'src/models/IContactInfo';

export const createContactWithId = (contact: IContactInfo): IContact => {
  return {
    ...contact,
    chatId: `${contact.phone}@c.us`,
  }
}