import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';


@Pipe({ name: 'calendar' })
export class CalendarMomentPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(date: string) {
    return moment(date).fromNow();
  }
}