import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  NumberOfActiveProducts$: Observable<number> = this.productService.getActiveProducts()
  NumberOfActiveCustomers$: Observable<number> = this.customerService.getActiveCustomers()

  constructor(
    private productService: ProductService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

}
