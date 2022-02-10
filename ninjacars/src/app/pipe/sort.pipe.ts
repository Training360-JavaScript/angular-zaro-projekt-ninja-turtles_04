import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    items: [],
    direction: string,
    column: string,
    type: string | number
  ) {
    if (!items) return;
    let sortedItems = [];
    sortedItems =
      direction === 'asc'
        ? this.sortAscending(items, column, type)
        : this.sortDescending(items, column, type);
    return sortedItems;
  }

  sortAscending(items: any, column: any, type: any) {
    return [
      ...items.sort((a: any, b: any) => {
        if (type === 'string') {
          if (a[column].toUpperCase() < b[column].toUpperCase()) return -1;
          if (a[column].toUpperCase() > b[column].toUpperCase()) return 1;
          return 0;
        } else {
          return a[column] - b[column];
        }
      }),
    ];
  }

  sortDescending(items: any, column: any, type: any) {
    return [
      ...items.sort((a: any, b: any) => {
        if (type === 'string') {
          if (a[column].toUpperCase() > b[column].toUpperCase()) return -1;
          if (a[column].toUpperCase() < b[column].toUpperCase()) return 1;
          return 0;
        } else {
          return b[column] - a[column];
        }
      }),
    ];
  }
}
