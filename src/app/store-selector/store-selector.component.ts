import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Shop } from '../models/shop';
import { GeneralService } from '../services/general.service';
import { MatSnackBar } from '@angular/material';
import { Utils } from '../utils';

@Component({
  selector: 'store-selector',
  templateUrl: './store-selector.component.html',
  styleUrls: ['./store-selector.component.css']
})
export class StoreSelectorComponent implements OnInit {
  public shops: Array<Shop> = null;
  public selectedShopName: string = "";
  @Output() chooseShop = new EventEmitter();
  constructor(
    private generalServices: GeneralService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.generalServices.getShops()
      .subscribe((shops: Array<Shop>) => {
        this.shops = shops;
      });
  }

  onOk() {
    let selectedShop: Shop = null;
    this.shops.forEach(element => {
      if (element.shopName == this.selectedShopName) {
        selectedShop = element;
      }
    });
    localStorage.setItem(Utils.SHOP_KEY, JSON.stringify(selectedShop));
    this.chooseShop.emit(selectedShop);
  }
}
