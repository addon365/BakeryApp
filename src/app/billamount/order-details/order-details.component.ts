import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { SalesOrder } from '../../models/sales-order';
import { Customer } from '../../models/customer';
import { SalesOrderService } from '../../services/sales-order.service';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() public salesOrder: SalesOrder;
  constructor(
    private customerService: CustomerService,
    private salesOrderService: SalesOrderService) { }

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
  }
}
