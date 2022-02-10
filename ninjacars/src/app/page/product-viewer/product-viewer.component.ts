import { ProductService } from './../../service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

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

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof new Product()[key];
  }
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$;
  }
}
