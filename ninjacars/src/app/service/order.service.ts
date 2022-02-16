import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from '../model/order';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {

  constructor(http: HttpClient) {
    super(http);
    this.endString = 'order'
  }

  getUnpaidOrders(): Observable<number> {
    return this.getAll().pipe(map(orders => orders.filter(i => i.status !== "paid").length))
  }

  getNumberOfOrdersByStatus(status: string): Observable<number> {
    return this.getAll().pipe(map(orders => orders.filter(i => i.status === status).length))
  }
}
