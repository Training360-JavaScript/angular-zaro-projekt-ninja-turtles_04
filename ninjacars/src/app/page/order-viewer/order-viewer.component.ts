import { Order } from './../../model/order';
import { OrderService } from './../../service/order.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-order-viewer',
  templateUrl: './order-viewer.component.html',
  styleUrls: ['./order-viewer.component.scss'],
})
export class OrderViewerComponent implements OnInit {
  @Input() orders: Order[] = [];
  orders$: Observable<Order[]> = this.orderService.getAll();

  keys: string[] = Object.keys(new Order());
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
    this.type = typeof new Order()[key];
  }
  constructor(
    private orderService: OrderService,
    public notifyService: NotificationService
  ) {}

  ngOnInit(): void {}

  onDelete(order: Order) {
    this.orderService.delete(order).subscribe(
      (bill) => (this.orders$ = this.orderService.getAll()),
      (err) => this.showError(err),
      () => this.showSuccessDelete()
    );
  }

  showSuccessDelete() {
    this.notifyService.showSuccess(
      'Item deleted successfully!',
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
