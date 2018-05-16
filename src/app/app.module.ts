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
import { BillComponent } from './billamount/bill/bill.component';
import { CartComponent } from './billamount/cart/cart.component';
import { ProductdetailComponent } from './billamount/productdetail/productdetail.component';

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
    BillComponent,
    CartComponent,
    ProductdetailComponent,
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
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
