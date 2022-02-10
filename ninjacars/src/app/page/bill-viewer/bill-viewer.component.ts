import { Bill } from './../../model/bill';
import { BillService } from './../../service/bill.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof new Bill()[key];
  }
  constructor(private billService: BillService) {}

  ngOnInit(): void {}
}
