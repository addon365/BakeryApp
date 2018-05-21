import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { MatSnackBar } from '@angular/material';
import { OrderItem } from '../../models/order-item';
import { SalesOrder } from '../../models/sales-order';
import { Utils } from '../../utils';
import { SalesOrderService } from '../../services/sales-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() salesOrder: SalesOrder;
  @Output() onOrder = new EventEmitter<any>();
  @Output() closeBill = new EventEmitter<boolean>();
  showOrderItems= false;

  constructor(private snackBar: MatSnackBar,
    private salesOrderService: SalesOrderService) { }

  ngOnInit() {
    
    if (this.salesOrder.orderItems != null) {
        this.showOrderItems = true;
    }
    else{
      this.showOrderItems=false;
    }
  }


  onOrderClick() {
    this.onOrder.emit(this.salesOrder);

  }

  onCheckOut() {
    this.salesOrder.orderStatus = Utils.getOrderStatus(Utils.DELIVERED);
    this.salesOrder.customer = null;
    this.salesOrderService.addSalesOrder(this.salesOrder)
      .subscribe((response: any) => {
        this.snackBar.open("Billed Successfully", "Ok", {
          duration: 2000,
        });
      });
  }
}
