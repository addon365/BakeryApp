import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../../models/sales-order';
import { OrderItem } from '../../models/order-item';
import { Customer } from '../../models/customer';
import { Shop } from '../../models/shop';
import { OrderStatus } from '../../models/order-status';
import { Utils } from '../../utils';

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
    this.salesOrder =SalesOrder.init();
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
