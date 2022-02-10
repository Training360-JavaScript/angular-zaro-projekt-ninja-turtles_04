import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-viewer',
  templateUrl: './category-viewer.component.html',
  styleUrls: ['./category-viewer.component.scss'],
})
export class CategoryViewerComponent implements OnInit {
  @Input() categories: Category[] = [];
  categories$: Observable<Category[]> = this.categoryService.getAll();

  keys: string[] = Object.keys(new Category());
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
    this.type = typeof new Category()[key];
  }
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}
}
