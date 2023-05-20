import {IContact} from 'src/models/IContact';

export interface IContactInfo extends Omit<IContact, 'id'> {}