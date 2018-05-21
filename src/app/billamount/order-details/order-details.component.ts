import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { SalesOrder } from '../../models/sales-order';
import { Customer } from '../../models/customer';
import { SalesOrderService } from '../../services/sales-order.service';
import { PrintComponent } from '../../printpage/print/print.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  isPopupOpened=true;
  @Input() public salesOrder: SalesOrder;
  constructor(
    private customerService: CustomerService,
    private salesOrderService: SalesOrderService,private dialog?: MatDialog) { }

  ngOnInit() {

  }
  findCustomer() {
    this.customerService.findByMobile(this.salesOrder.customer.mobile)
      .subscribe((customer: Customer) => {
        if (customer != null) {
          this.salesOrder.customer = customer;
        }
      });
  }
  onSubmit() {
    console.log(this.salesOrder);
    
    console.log(this.salesOrder.expectedTime);
    console.log(this.salesOrder.expectedDate);
    this.salesOrderService.addSalesOrder(this.salesOrder)
      .subscribe((response: any) => {
        console.log(response);
      });
      this.isPopupOpened = true;

      const dialogRef = this.dialog.open(PrintComponent, {
       data:{}
      });
    
    
      dialogRef.afterClosed().subscribe(result => {
        this.isPopupOpened = false;
      });
    }
    
  }
  
 

