import {Pipe, PipeTransform} from '@angular/core';
import {ContactType} from './contactType';

@Pipe({name: 'phonebookCategoryPipe'})
export class PhonebookCategoryPipe implements PipeTransform {

  constructor() {

  }

  transform(value: ContactType): any {

    if (!value) {

      return value;

    }

    switch (ContactType[value.toString()]) {

      case ContactType.PERSONAL : {

        return 'Personal:';

      }

    }

    switch (ContactType[value.toString()]) {

      case ContactType.BUSINESS : {

        return 'Business:';

      }

      default: {

        return value;

      }

    }

  }

}
