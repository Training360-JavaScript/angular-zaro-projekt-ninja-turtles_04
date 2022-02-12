import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  NumberOfActiveProducts$: Observable<number> = this.productService.getActiveProducts()
  NumberOfActiveCustomers$: Observable<number> = this.customerService.getActiveCustomers()
  NumberOfUnpaidOrders$: Observable<number> = this.orderService.getUnpaidOrders()
  SumOfUnpaidBills$: Observable<number> = this.billService.getSumOfUnpaidBills()

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private billService: BillService
  ) { }

  ngOnInit(): void {
  }

}
