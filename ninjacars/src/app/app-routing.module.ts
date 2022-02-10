import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductViewerComponent } from './page/product-viewer/product-viewer.component';
import { OrderViewerComponent } from './page/order-viewer/order-viewer.component';
import { CustomerViewerComponent } from './page/customer-viewer/customer-viewer.component';
import { CategoryViewerComponent } from './page/category-viewer/category-viewer.component';
import { BillViewerComponent } from './page/bill-viewer/bill-viewer.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { EditCategoryComponent } from './page/edit-category/edit-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { EditOrderComponent } from './page/edit-order/edit-order.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'bills',
    component: BillViewerComponent,
  },
  {
    path: 'categories',
    component: CategoryViewerComponent,
  },
  {
    path: 'customers',
    component: CustomerViewerComponent,
  },
  {
    path: 'orders',
    component: OrderViewerComponent,
  },
  {
    path: 'products',
    component: ProductViewerComponent,
  },
  {
    path: 'edit/product/:id',
    component: EditProductComponent,
  },
  {
    path: 'edit/category/:id',
    component: EditCategoryComponent,
  },
  {
    path: 'edit/customer/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'edit/order/:id',
    component: EditOrderComponent,
  },
  {
    path: 'edit/bill/:id',
    component: EditBillComponent,
  },
  {
    path: '**',
    component: DashboardComponent,
  },
  //valószínűleg innentől felesleges
  {
    path: 'delete/product/:id',
    component: EditProductComponent,
  },
  {
    path: 'delete/category/:id',
    component: EditCategoryComponent,
  },
  {
    path: 'delete/customer/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'delete/order/:id',
    component: EditOrderComponent,
  },
  {
    path: 'delete/bill/:id',
    component: EditBillComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
