import { ProductService } from './../../service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.scss'],
})
export class ProductViewerComponent implements OnInit {
  @Input() products: Product[] = [];
  products$: Observable<Product[]> = this.productService.getAll();

  keys: string[] = Object.keys(new Product());
  phrase: string = '';
  filterKey: string = '';

  direction: string = 'asc';
  column: string = 'id';
  type: string | number = 'number';

  length: number = 0;
  sum: number = 0;

  page: number = 1;
  actualProducts$: Observable<Product[]> = this.getActualProducts()

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof new Product()[key];
  }
  constructor(
    private productService: ProductService,
    public notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.products$.subscribe({
      next: products => {
        this.length = products.length;
        this.sum = products.reduce((sum, product) => sum + product.price, 0)
      }
    })
  }

  setPage(page: number): void {
    this.page = Math.ceil(page);
    this.actualProducts$ = this.getActualProducts()  
  }

  getActualProducts(): Observable<Product[]> {
    return this.products$.pipe(
      map(products => products.slice((this.page - 1) * 50, this.page*50)))
  }

  onDelete(product: Product) {
    this.productService.delete(product).subscribe(
      (bill) => (this.products$ = this.productService.getAll()),
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
