import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit,
  ViewContainerRef
} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {PhonebookService} from '../../services/phonebook2.service';
import {PhoneBook} from './phonebook2.interface';
import {PhonebookCreatorDialog} from './phonebook-creator.dialog';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  creatorDialogRef: MatDialogRef<PhonebookCreatorDialog>;
  phonebook$: Observable<PhoneBook[]>;

  // constructor
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog,
              private phonebookService: PhonebookService) {
  }

  loadPosts(): void {
    this.phonebook$ = this.phonebookService.findPhonebooks();
  }

  viewPhonebook(phonebook: PhoneBook): void {
    console.log(JSON.stringify(phonebook));
    this.router.navigate(['/phone-detail', phonebook.contactId]);
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    // console.log("AfterContentInit");
  }

  ngAfterContentChecked(): void {
    // console.log("AfterContentChecked");
  }

  ngAfterViewInit(): void {
    // console.log("AfterViewInit");
  }

  ngAfterViewChecked(): void {
    // console.log("AfterViewChecked");
  }

  ngOnDestroy(): void {
    // console.log("ngOnDestroy");
  }

  //   let config: MatDialogConfig = new MatDialogConfig();
  //   config.viewContainerRef = this.vcf;
  //   config.role = 'dialog';
  //   config.width = '70%';
  //   config.height = '60%';
  //   config.position = {top: '0px'};

  // show dialog
  showAddDialog(): void {
    console.log('showContainerDialog');
    this.creatorDialogRef = this.dialog.open(PhonebookCreatorDialog);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      console.log('close dialog');
    });
  }

}
