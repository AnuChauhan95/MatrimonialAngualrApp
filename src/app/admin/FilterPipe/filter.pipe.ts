import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length===0){
      return value;
    }
    return value.filter(function(search:{countryName:any}){
      return search.countryName.toLowerCase().indexOf(searchTerm.toLowerCase())> -1
    })
  
  }

}
