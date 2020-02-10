import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}
  transform(value:any, ...args: any[]): any {
    console.log('huh what', value)
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);

  }

}
