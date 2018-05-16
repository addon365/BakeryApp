import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('itemNameInput') itemName: MatInput;
  public item: Product
   = new Product(1, "", 1, 0);
  constructor(private productService: ProductService) { }
 
  ngOnInit() {
  }
  onSubmit() {
    
    this.productService.addProduct(this.item)
      .subscribe((response) => {
        console.log(response);
      }
      );
      this.item.name="";
      this.item.price=0;
      this.item.quantity=1;
      this.itemName.focus();
      
  }
}
