import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer> {

  constructor(http: HttpClient) {
    super(http);
    this.endString = 'customer'
  }

  getActiveCustomers(): Observable<number> {
    return  this.getAll().pipe(map(customers => customers.filter(i => i.active).length))
   }
  getInactiveCustomers(): Observable<number> {
    return  this.getAll().pipe(map(customers => customers.filter(i => !i.active).length))
   }
}
