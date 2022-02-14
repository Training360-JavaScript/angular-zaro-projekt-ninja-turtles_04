import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {


  constructor(http: HttpClient) {
    super(http);
    this.endString = "product"
   }

   getActiveProducts(): Observable<number> {
    return  this.getAll().pipe(map(products => products.filter(i => i.active).length))
   }
   getInActiveProducts(): Observable<number> {
    return  this.getAll().pipe(map(products => products.filter(i => !i.active).length))
   }

}
