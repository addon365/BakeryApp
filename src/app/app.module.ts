import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import{AppRoutingModule,routingcomponents} from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { LayoutModule } from '@angular/cdk/layout';
import{MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatNativeDateModule,

  } from '@angular/material';
  import {MatTableModule} from '@angular/material/table';
  import {MatDialogModule} from '@angular/material/dialog';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import{HttpClientModule} from '@angular/common/http';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CartComponent } from './billamount/cart/cart.component';
import { ProductdetailComponent } from './billamount/productdetail/productdetail.component';
import { OrderDetailsComponent } from './billamount/order-details/order-details.component';
import { BillRootComponent } from './billamount/bill-root/bill-root.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PrintComponent } from './printpage/print/print.component';
import { MainComponent } from './main/main.component';

import { StoreSelectorComponent } from './store-selector/store-selector.component';

import { OrderEditComponent } from './orders/order-edit/order-edit.component';
import { SalesReportComponent } from './sales/sales-report/sales-report.component';
import { SalesReportDetailsComponent } from './sales/sales-report-details/sales-report-details.component';
import { PrintcheckComponent } from './billamount/printcheck/printcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    ProductComponent,
    ProductListComponent,
    ProductEditComponent,
    CustomerAddComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CartComponent,
    ProductdetailComponent,
    OrderDetailsComponent,
    BillRootComponent,
    OrderlistComponent,
    PrintComponent,
    MainComponent,
    
    StoreSelectorComponent,
    
    OrderEditComponent,
    
    SalesReportComponent,
    
    SalesReportDetailsComponent,
    
    PrintcheckComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  BrowserAnimationsModule,
  HttpClientModule,
  ],
  providers: [],
  entryComponents:[CustomerEditComponent,ProductEditComponent,OrderEditComponent,SalesReportDetailsComponent,PrintComponent,PrintcheckComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
