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
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { SortPipe } from './pipe/sort.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditProductComponent,
    EditCategoryComponent,
    EditCustomerComponent,
    EditOrderComponent,
    EditBillComponent,
    HeaderComponent,
    SidebarComponent,
    SortPipe,
    FilterPipe
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
