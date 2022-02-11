import { Order } from './../../model/order';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order$!: Observable<Order>

  order: Order = new Order();

  constructor(private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.order$ = this.orderService.getOne(param['id'])
    })
    this.order$.subscribe({
      next: order => this.order = order ? order : this.order
    })
  }

  onUpdate(order: Order) {
    this.orderService.update(order).subscribe(
      order => this.router.navigate(['/', 'orders']),
    )
  }

  onCreate(order: Order) {
    this.orderService.create(order).subscribe(
      order => this.router.navigate(['/', 'orders']),
    )
  }

}
