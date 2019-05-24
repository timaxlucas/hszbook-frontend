import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { icons } from 'feather-icons'; // v4+

/**
 * https://stackoverflow.com/questions/43598311/component-is-part-of-the-declaration-of-2-modules
 */

@Pipe({ name: 'feather' })
export class FeatherIconsPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(icon: string, size: number = 24, color: string = 'inherit') {
    return this.sanitizer.bypassSecurityTrustHtml(icons[icon].toSvg({
      width: size,
      height: size,
      color: color
    }));
  }
}