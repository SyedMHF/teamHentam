import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PhoneBook} from '../app/dashboard/phonebook2.interface';
import 'rxjs/add/operator/map';

// request direct injection via constructor
@Injectable()
export class PhonebookService {

  constructor(private http: HttpClient) {

  }

  findPhonebooks(): Observable<PhoneBook[]> {

    return this.http.get(environment.endpoint + '/contacts.json')
      .map(res => <PhoneBook[]>res);

  }

  findPhonebookByContactId(contactId: string): Observable<PhoneBook> {

    return this.http.get(environment.endpoint + '/contact.json')
      .map(res => <PhoneBook>res);

  }
}
