import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../../models/sales-order';
import { OrderItem } from '../../models/order-item';
import { Customer } from '../../models/customer';
import { Shop } from '../../models/shop';

@Component({
  selector: 'bill-root',
  templateUrl: './bill-root.component.html',
  styleUrls: ['./bill-root.component.css']
})
export class BillRootComponent implements OnInit {
  public salesOrder: SalesOrder;
  public isOrder: boolean = false;
  constructor() { }

  ngOnInit() {
    this.salesOrder = new SalesOrder(
      1,
      new Customer(
        -1,
        "",
        "",
        "", ),
      0,
      0,
      new Date(),
      new Date(),
      "",
      "",
      new Shop(
        1,
        "",
        ""),
      new Array<OrderItem>()
    );
  }

  onAddToCart($event) {
    let item: OrderItem = $event;
    this.salesOrder.orderItems.push(item);
    this.salesOrder.total = this.salesOrder.total + item.price * item.quantity;
  }
  onOrderClicked($event) {
    this.salesOrder = $event;
    this.isOrder = true;

  }

}
