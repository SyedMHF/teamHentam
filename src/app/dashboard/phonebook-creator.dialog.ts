import {MatDialogRef, MatSnackBar} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactType} from './contactType';
import {PhoneBook} from './phonebook2.interface';

@Component({

  selector: 'qs-phonebook-creator',
  templateUrl: './phonebook-creator.dialog.html',

})
export class PhonebookCreatorDialog implements OnInit {

  editorForm: FormGroup;

  constructor(private dialog: MatDialogRef<PhonebookCreatorDialog>,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.snackBar.open('Opened phonebook editor', '',
      {duration: 2000});
    this.editorForm = this.formBuilder.group({
      name: ['', [(Validators.required)]],
      num: ['', [(Validators.required)]],
      address: ['', [EmailValidator]],
      contactType: [ContactType, [(Validators.required)]],
    });

  }

  save(phonebook: PhoneBook): void {

    console.log(JSON.stringify(phonebook));
    this.dialog.close;

  }

  close(): void {
    this.dialog.close();
  }

}
