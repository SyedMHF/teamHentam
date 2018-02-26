import {Phone} from './phonenumber2.interface';
import {Email} from './email2.interface';

export interface PhoneBook {

  contactId: string;
  name: string;
  phoneNumbers: Phone[];
  emails: Email[];

}
