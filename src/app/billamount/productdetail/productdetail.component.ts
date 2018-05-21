import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Product } from '../../models/product';
import { OrderView } from '../../models/order-view';
import { Time } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { SalesOrder } from '../../models/sales-order';
import { OrderItem } from '../../models/order-item';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  item: OrderItem;
  public products: Array<Product> = [];
  public filteredOptions: Observable<Product[]>;
  formControl: FormControl = new FormControl();
  @Output() addToCart = new EventEmitter<any>();
  @ViewChild('quantityfocus') searchinput: ElementRef;
  @HostListener('document:keyup', ['$event'])
  keydown(event: KeyboardEvent): void {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 13) {
      this.searchinput.nativeElement.focus();
    }
  }

  constructor(private customerService: CustomerService,
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll()
      .subscribe((products: Array<Product>) => {
        this.products = products;
      });
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }
  filter(val: any): any[] {
    return this.products.filter(product => product.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  
  onAdd(item: any) {
    this.addToCart.emit(item);

    //this.searchinput.nativeElement.focus();
  }

  onSelectionChange(product: Product) {
    this.item = new OrderItem(
      1,
      product,
      product.price,
      1,
      null
    );
  }

}
