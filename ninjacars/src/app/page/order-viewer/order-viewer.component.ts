import { Order } from './../../model/order';
import { OrderService } from './../../service/order.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    // this.type = typeof Order[key];
  }
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}
}
