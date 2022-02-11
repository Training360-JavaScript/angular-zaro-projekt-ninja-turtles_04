import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product$!: Observable<Product>

  product: Product = new Product();

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.product$ = this.productService.getOne(param['id'])
    })
    this.product$.subscribe({
      next: product => this.product = product ? product : this.product
    })
  }

  onUpdate(product: Product) {
    this.productService.update(product).subscribe(
      product => this.router.navigate(['/', 'products']),
    )
  }

  onCreate(product: Product) {
    this.productService.create(product).subscribe(
      product => this.router.navigate(['/', 'products']),
    )
  }
}
