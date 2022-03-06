import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langchange'
})
export class LangchangePipe implements PipeTransform {
  data={'submit':'submit chey','Enter email':'email enter chey'};
  transform(value: string, lang:string): unknown {
    let text = value;
    if(lang=='tel'){
      return this.data[text];
    }
    return text;
  }

}
