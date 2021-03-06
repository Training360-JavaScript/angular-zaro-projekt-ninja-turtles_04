import { CustomerService } from './../../service/customer.service';
import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { map, Observable } from 'rxjs';
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

  length: number = 0;
  sum: number = 0;

  page: number = 1;
  actualCustomers$: Observable<Customer[]> = this.getactualCustomers();

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof new Customer()[key];
    // if (this.type !== 'number') this.type = 'string';
  }
  constructor(
    private customerService: CustomerService,
    public notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.customers$.subscribe({
      next: (customers) => {
        this.length = customers.length;
        // this.sum = customers.reduce((sum, customer) => sum + customer.active, 0);
      },
    });
    this.customerService.getActiveCustomers().subscribe({
      next: (sum) => (this.sum = sum),
    });
  }

  setPage(page: number): void {
    this.page = Math.ceil(page);
    this.actualCustomers$ = this.getactualCustomers();
  }

  getactualCustomers(): Observable<Customer[]> {
    return this.customers$.pipe(
      map((customers) => customers.slice((this.page - 1) * 50, this.page * 50))
    );
  }

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
      'Something went wrong. Details: ' + err,
      'NinjaCars Ltd.'
    );
  }
}
