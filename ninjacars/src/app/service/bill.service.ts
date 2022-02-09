import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
