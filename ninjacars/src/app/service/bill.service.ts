import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bill } from '../model/bill';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseService<Bill> {

  constructor(http: HttpClient) { 
    super(http);
    this.endString = 'bill'
  }

  getSumOfUnpaidBills(): Observable<number> {
    return this.getAll().pipe(map(bills => 
      bills.filter(i => i.status !== "paid").map(bill => bill.amount)
      .reduce((a, b) => a + b)))
  }
}
