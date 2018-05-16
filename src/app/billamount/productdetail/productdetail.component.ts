import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Product } from '../../models/product';
import { OrderView } from '../../models/order-view';
import { Time } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  @Input() item: Product;
  @Input() items: Array<Product> = [];

  orderView: OrderView = new OrderView("", "", new Date(), 14, 30);
  @ViewChild('quantityfocus') searchinput: ElementRef;
  @HostListener('document:keyup', ['$event'])
  focus(event: KeyboardEvent): void {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 13) {
      this.searchinput.nativeElement.focus();

    }
  }
  constructor() { }

  ngOnInit() {
    // this.searchinput.nativeElement.focus();

  }
  @Output() cartEvent = new EventEmitter<any>();
  onAdd(item: any) {
    this.cartEvent.emit(item);

    //this.searchinput.nativeElement.focus();
  }
  findCustomer(){
    
  }
}
