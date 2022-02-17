import { CustomerService } from './../../service/customer.service';
import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-customer-viewer',
  templateUrl: './customer-viewer.component.html',
  styleUrls: ['./customer-viewer.component.scss'],
})
export class CustomerViewerComponent implements OnInit {
  @Input() customers: Customer[] = [];
  customers$: Observable<Customer[]> = this.customerService.getAll();

  keys: string[] = Object.keys(new Customer());
  phrase: string = '';
  filterKey: string = '';

  direction: string = 'asc';
  column: string = 'id';
  type: string | number = 'number';

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof new Customer()[key];
    if (this.type !== 'number') this.type = 'string';
  }
  constructor(
    private customerService: CustomerService,
    public notifyService: NotificationService
  ) {}

  ngOnInit(): void {}

  onDelete(customer: Customer) {
    this.customerService.delete(customer).subscribe(
      (bill) => (this.customers$ = this.customerService.getAll()),
      (err) => this.showError(err),
      () => this.showSuccess()
    );
  }

  showSuccess() {
    this.notifyService.showSuccess(
      'Item deleted successfully!',
      'NinjaCars Ltd.'
    );
  }

  showError(err: String) {
    this.notifyService.showError(
      'Something is wrong. Details: ' + err,
      'NinjaCars Ltd.'
    );
  }
}
