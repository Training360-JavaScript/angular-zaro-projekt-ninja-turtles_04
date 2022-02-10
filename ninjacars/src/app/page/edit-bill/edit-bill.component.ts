import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  bill$!: Observable<Bill>;

  bill: Bill = new Bill();

  constructor(private billService: BillService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.bill$ = this.billService.getOne(param['id'])
    })
    this.bill$.subscribe({
      next: bill => this.bill = bill ? bill : this.bill
    })
  }

  onUpdate(bill: Bill) {
    this.billService.update(bill)
  }

  onCreate(bill: Bill) {
    this.billService.create(bill)
  }
}
