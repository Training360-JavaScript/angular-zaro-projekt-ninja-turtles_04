import { Category } from './../../model/category';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  category$!: Observable<Category>

  category: Category = new Category();

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.category$ = this.categoryService.getOne(param['id'])
    })
    this.category$.subscribe({
      next: category => this.category = category ? category : this.category
    })
  }

  onUpdate(category: Category) {
    this.categoryService.update(category).subscribe(
      category => this.router.navigate(['/', 'category']),
    )
  }

  onCreate(category: Category) {
    this.categoryService.create(category).subscribe(
      category => this.router.navigate(['/', 'categories']),
    )
  }

}
