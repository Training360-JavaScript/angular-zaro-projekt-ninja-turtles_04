import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { EditCategoryComponent } from './page/edit-category/edit-category.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { EditOrderComponent } from './page/edit-order/edit-order.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProductComponent,
    EditCategoryComponent,
    EditCustomerComponent,
    EditOrderComponent,
    EditBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
