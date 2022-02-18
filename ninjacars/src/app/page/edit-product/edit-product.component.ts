import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { NotificationService } from 'src/app/service/notification.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  product$!: Observable<Product>;

  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) =>
        (this.product$ = this.productService.getOne(param['id'])),
    });
    this.product$.subscribe({
      next: (product) => (this.product = product ? product : this.product),
    });
  }

  onUpdate(product: Product) {
    this.productService.update(product).subscribe({
      next: (category) => this.router.navigate(['/', 'products']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessEdit()
    });
  }

  onCreate(product: Product) {
    this.productService.create(product).subscribe(
      (category) => this.router.navigate(['/', 'products']),
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
