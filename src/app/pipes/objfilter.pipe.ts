import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'objfilter'
})
export class ObjFilterPipe implements PipeTransform {
  transform(items: any, values: any): any{
    if(!items){ return []; }
    if(!values){ return items; }

    return items.filter((i) => {
      return values.indexOf(i.value) >= 0;
    })
  }

  // transformx(items: any, filter: any): any {
  //   if (filter && Array.isArray(items)) {
  //     let filterKeys = Object.keys(filter);
  //     return items.filter(item =>
  //       filterKeys.reduce((memo, keyName) =>
  //         (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
  //   } else {
  //     return items;
  //   }
  // }
}
