import{NgModule} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { BillComponent } from './billamount/bill/bill.component';

const routes: Routes = [
   {
       path:'product',
       component:ProductComponent
   },
   {
       path:'product-list',
       component:ProductListComponent
   },
   {
        path:'customer-add',
        component:CustomerAddComponent
   },
   {
        path:'customer-list',
        component:CustomerListComponent
   },
   {
        path:'bill',
        component:BillComponent
   }
   
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingcomponents =[PageNotFoundComponent
                                         ]