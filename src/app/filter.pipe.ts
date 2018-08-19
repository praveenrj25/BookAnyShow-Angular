import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchQuery: string): any[] {
    if (!items) { return []; }
    if (!searchQuery) { return items; }

    searchQuery = searchQuery.toLowerCase();

    return items.filter(it => {
      return it.name.toLowerCase().includes(searchQuery);
    });
  }

}
