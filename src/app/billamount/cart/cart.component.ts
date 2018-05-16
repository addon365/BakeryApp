import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items: any[] = [];
  private _setItems: any = null;
  public total: number = 0;
  @Input()
  set setitems(item: Product) {
    if (item == null)
      return;
    this.total = this.total + (item.price * item.quantity);
    this.items.push(item);
  }
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  @Output() order = new EventEmitter<any>();
  @Output() closeBill = new EventEmitter<boolean>();

  onOrderClick() {
    console.log("This is on Select");
    this.order.emit(this.items);
  }

  onCheckOut(){
    this.snackBar.open("Billed Successfully", "Ok", {
      duration: 2000,
    });
    this.items=[];
    this.total=0;
    this.closeBill.emit(true);
  }
}
