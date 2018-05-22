import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { BillRootComponent } from './billamount/bill-root/bill-root.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PrintComponent } from './printpage/print/print.component';
import { SalesReportComponent } from './sales/sales-report/sales-report.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
    {
        path: 'http://localhost:8080/bakery-application/',
        component: AppComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'product-list',
        component: ProductListComponent
    },
    {
        path: 'customer-add',
        component: CustomerAddComponent
    },
    {
        path: 'customer-list',
        component: CustomerListComponent
    },
    {
        path: 'bill',
        component: BillRootComponent
    },
    {
        path: 'orderlist',
        component: OrderlistComponent
    },
    {
        path: 'sales-report',
        component: SalesReportComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [PageNotFoundComponent,AppComponent
]