import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { SalesOrder } from '../../models/sales-order';
import { Customer } from '../../models/customer';
import { SalesOrderService } from '../../services/sales-order.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Output() orderCompleted = new EventEmitter<boolean>();
  @Input() public salesOrder: SalesOrder;
  constructor(
    private customerService: CustomerService,
    private salesOrderService: SalesOrderService,
    private snackBar: MatSnackBar) { }

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

    this.salesOrderService.addSalesOrder(this.salesOrder)
      .subscribe((response: any) => {
        this.orderCompleted.emit(true);
        this.snackBar.open("Order Submitted Successfull", "ok", {
          duration: 2000
        });
      });
  }
}
