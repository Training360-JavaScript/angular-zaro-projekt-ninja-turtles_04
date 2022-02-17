import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  customer$!: Observable<Customer>;

  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) =>
        (this.customer$ = this.customerService.getOne(param['id'])),
    });
    this.customer$.subscribe({
      next: (customer) => (this.customer = customer ? customer : this.customer),
    });
  }

  onUpdate(customer: Customer) {
    this.customerService.update(customer).subscribe(
      (category) => this.router.navigate(['/', 'customers']),
      (err) => this.showError(err),
      () => this.showSuccessEdit()
    );
  }

  onCreate(customer: Customer) {
    this.customerService.create(customer).subscribe(
      (category) => this.router.navigate(['/', 'customers']),
      (err) => this.showError(err),
      () => this.showSuccessCreate()
    );
  }

  showSuccessEdit() {
    this.notifyService.showSuccess(
      'Item edited successfully!',
      'NinjaCars Ltd.'
    );
  }

  showSuccessCreate() {
    this.notifyService.showSuccess(
      'Item created successfully!',
      'NinjaCars Ltd.'
    );
  }

  showError(err: String) {
    this.notifyService.showError(
      'Something went wrong. Details:' + err,
      'NinjaCars Ltd.'
    );
  }
}
