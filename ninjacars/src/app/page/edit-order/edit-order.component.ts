import { Order } from './../../model/order';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss'],
})
export class EditOrderComponent implements OnInit {
  order$!: Observable<Order>;

  order: Order = new Order();

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) => (this.order$ = this.orderService.getOne(param['id'])),
    });
    this.order$.subscribe({
      next: (order) => (this.order = order ? order : this.order),
    });
  }

  onUpdate(order: Order) {
    this.orderService.update(order).subscribe(
      (category) => this.router.navigate(['/', 'orders']),
      (err) => this.showError(err),
      () => this.showSuccessEdit()
    );
  }

  onCreate(order: Order) {
    this.orderService.create(order).subscribe(
      (category) => this.router.navigate(['/', 'orders']),
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
