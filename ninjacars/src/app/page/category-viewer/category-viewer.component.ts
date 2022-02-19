import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { NotificationService } from 'src/app/service/notification.service';

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

  length: number = 0;

  page: number = 1;
  actualCategories$: Observable<Category[]> = this.getactualCategories();

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof new Category()[key];
  }
  constructor(
    private categoryService: CategoryService,
    public notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.categories$.subscribe({
      next: (categories) => {
        this.length = categories.length;
      },
    });
  }

  setPage(page: number): void {
    this.page = Math.ceil(page);
    this.actualCategories$ = this.getactualCategories();
  }

  getactualCategories(): Observable<Category[]> {
    return this.categories$.pipe(
      map((categories) =>
        categories.slice((this.page - 1) * 50, this.page * 50)
      )
    );
  }

  onDelete(category: Category) {
    this.categoryService.delete(category).subscribe(
      (bill) => (this.categories$ = this.categoryService.getAll()),
      (err) => this.showError(err),
      () => this.showSuccess()
    );
  }

  showSuccess() {
    this.notifyService.showSuccess(
      'Item deleted successfully!!',
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
