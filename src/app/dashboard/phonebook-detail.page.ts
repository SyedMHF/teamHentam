import {Observable} from 'rxjs/Observable';
import {PhoneBook} from './phonebook2.interface';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhonebookService} from '../../services/phonebook2.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'qs-phonebook-detail',
  templateUrl: './phonebook-detail.page.html'
})
export class PhonebookDetailPage implements OnInit, OnDestroy {

  // declare variable
  contactId$: Observable<PhoneBook>;

  constructor(private phonebookService: PhonebookService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  // data retrieval
  loadPhonebook(contactId: string): void {

    console.log('contactId: ' + contactId);
    this.contactId$ = this.phonebookService.findPhonebookByContactId(contactId);

  }

  ngOnInit(): void {

    this.route.params.subscribe((params: { contactId: string }) => {
      this.loadPhonebook(params.contactId);

    });

  }

  ngOnDestroy(): void {

  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
