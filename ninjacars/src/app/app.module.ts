import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

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
import { BillViewerComponent } from './page/bill-viewer/bill-viewer.component';
import { CategoryViewerComponent } from './page/category-viewer/category-viewer.component';
import { CustomerViewerComponent } from './page/customer-viewer/customer-viewer.component';
import { OrderViewerComponent } from './page/order-viewer/order-viewer.component';
import { ProductViewerComponent } from './page/product-viewer/product-viewer.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

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
    FilterPipe,
    BillViewerComponent,
    CategoryViewerComponent,
    CustomerViewerComponent,
    OrderViewerComponent,
    ProductViewerComponent,
    DashboardComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
