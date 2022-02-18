import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address } from '../model/address';
import { Customer } from '../model/customer';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService<Customer> {
  constructor(http: HttpClient) {
    super(http);
    this.endString = 'customer';
  }

  createCustomer(customer: Customer): Customer {
    if (typeof customer?.address === 'string') {
      const addressParts = (customer.address as unknown as string).split(' ');
      const zip = addressParts.shift();
      const country = addressParts.shift();
      const city = addressParts.shift();
      const street = addressParts.join();
      const notes = addressParts.join(' ');
      customer.address = new Address();
      customer.address.zip = parseInt(zip || '');
      customer.address.country = String(country);
      customer.address.city = String(city);
      customer.address.street = street;
      customer.address.notes = notes;
    }
    return new Customer(customer);
  }

  override getAll(): Observable<Customer[]> {
    return super.getAll().pipe(
      map((list) => {
        return list.map((customer) => this.createCustomer(customer));
      })
    );
  }

  override getOne(id: number): Observable<Customer> {
    return super
      .getOne(id)
      .pipe(map((customer) => this.createCustomer(customer)));
  }

  getActiveCustomers(): Observable<number> {
    return this.getAll().pipe(
      map((customers) => customers.filter((i) => i.active).length)
    );
  }
  getInactiveCustomers(): Observable<number> {
    return this.getAll().pipe(
      map((customers) => customers.filter((i) => !i.active).length)
    );
  }
}
