import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlify'
})
export class UrlifyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    let temp = value.replace(urlRegex,(urll)=>{
      return `<a href=${urll}>link</a>`;
    });
    
    
    return temp;
  }

}
