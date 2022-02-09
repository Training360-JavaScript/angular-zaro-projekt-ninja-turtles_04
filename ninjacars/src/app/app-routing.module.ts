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
    ///component: DashbordComponent
  },
  {
    path: 'edit/product/:id',
    component: EditProductComponent
  },
  {
    path: 'edit/category/:id',
    component: EditCategoryComponent
  },
  {
    path: 'edit/customer/:id',
    component: EditCustomerComponent
  },
  {
    path: 'edit/order/:id',
    component: EditOrderComponent
  },
  {
    path: 'edit/bill/:id',
    component: EditBillComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
