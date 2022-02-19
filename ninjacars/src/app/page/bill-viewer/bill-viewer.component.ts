import { Bill } from './../../model/bill';
import { BillService } from './../../service/bill.service';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

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

  length: number = 0;
  sum: number = 0;

  page: number = 1;
  actualBills$: Observable<Bill[]> = this.getActualProducts();

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
    public notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.bills$.subscribe({
      next: (bills) => {
        this.length = bills.length;
        this.sum = bills.reduce((sum, bill) => sum + bill.amount, 0);
      },
    });
  }

  setPage(page: number): void {
    this.page = Math.ceil(page);
    this.actualBills$ = this.getActualProducts();
  }

  getActualProducts(): Observable<Bill[]> {
    return this.bills$.pipe(
      map((bills) => bills.slice((this.page - 1) * 50, this.page * 50))
    );
  }

  onDelete(bill: Bill) {
    this.billService.delete(bill).subscribe(
      (bill) => (this.bills$ = this.billService.getAll()),
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
