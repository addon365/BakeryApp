import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Shop } from '../models/shop';
import { Utils } from '../utils';
import { MatDialog } from '@angular/material';
import { StoreSelectorComponent } from '../store-selector/store-selector.component';
import { SalesOrderService } from '../services/sales-order.service';
import { OrderStatus } from '../models/order-status';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  title = 'bakery app';
  public hasLoggedIn: boolean = false;
  private shop: Shop;
  constructor(public dialog: MatDialog,
    private salesOrderService: SalesOrderService) { }

  ngOnInit() {
    this.shop = JSON.parse(localStorage.getItem(Utils.SHOP_KEY));
    this.hasLoggedIn = this.shop != null;
    this.salesOrderService.getStatuses()
      .subscribe((orderStatuses: Array<OrderStatus>) => {
        Utils.setOrderStatuses(orderStatuses);
      });
  }
  changeShopName() {
    this.shop = null;
    this.hasLoggedIn = false;
  }
  afterShopSelected($event) {
    if ($event == null) {
      this.shop = null;
      this.hasLoggedIn = false;
    }
    else {
      this.shop = $event;
      console.log($event);
      localStorage.removeItem(Utils.SHOP_KEY);
      localStorage.setItem(Utils.SHOP_KEY, JSON.stringify(this.shop));
      this.hasLoggedIn = true;
    }
  }
}
