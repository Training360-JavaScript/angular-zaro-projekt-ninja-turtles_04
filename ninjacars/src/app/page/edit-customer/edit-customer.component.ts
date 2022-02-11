import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer$!: Observable<Customer>

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.customer$ = this.customerService.getOne(param['id'])
    })
    this.customer$.subscribe({
      next: customer => this.customer = customer ? customer : this.customer
    })
  }

  onUpdate(customer: Customer) {
    this.customerService.update(customer).subscribe(
      customer => this.router.navigate(['/', 'customers']),
    )
  }

  onCreate(customer: Customer) {
    this.customerService.create(customer).subscribe(
      customer => this.router.navigate(['/', 'customers']),
    )
  }

}
