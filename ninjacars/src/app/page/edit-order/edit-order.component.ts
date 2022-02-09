import { Order } from './../../model/order';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order$!: Observable<Order>

  constructor(private orderService: OrderService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.order$ = this.orderService.getOne(param['id'])
    })
  }

}
