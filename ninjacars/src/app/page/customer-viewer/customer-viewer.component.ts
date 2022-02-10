import { CustomerService } from './../../service/customer.service';
import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { Observable } from 'rxjs';

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
  }
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}
}
