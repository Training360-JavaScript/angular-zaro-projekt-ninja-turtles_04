import { Bill } from './../../model/bill';
import { BillService } from './../../service/bill.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bill-viewer',
  templateUrl: './bill-viewer.component.html',
  styleUrls: ['./bill-viewer.component.scss'],
})
export class BillViewerComponent implements OnInit {
  @Input() bills: Bill[] = [];
  bills$: Observable<Bill[]> = this.billService.getAll();

  keys: string[] = Object.keys(new Bill());
  phrase: string = '';
  filterKey: string = '';

  direction: string = 'asc';
  column: string = 'id';
  type: string | number = 'number';

  setSortParams(direction: string, column: string, _type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof new Bill()[key];
  }
  constructor(
    private billService: BillService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onDelete(bill: Bill) {
    this.billService.delete(bill).subscribe(
      (bill) => (this.bills$ = this.billService.getAll()),
      (err) => this.showError,
      this.showSuccess
    );
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showError() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
}
