import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(products: IProduct[], ascending: boolean = true): IProduct[] {
    if (!products || products.length <= 1) {
      return products;
    }

    return products.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return ascending ? -1 : 1;
      }

      if (nameA > nameB) {
        return ascending ? 1 : -1;
      }

      return 0;
    });

}
}
