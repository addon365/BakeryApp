import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { MatInput, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('itemNameInput') itemName: MatInput;
  public item: Product
    = new Product(1, "", 1, 0);
  constructor(private productService: ProductService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.itemName.focus();
  }
  onSubmit() {

    this.productService.addProduct(this.item)
      .subscribe((response) => {
        this.snackBar.open("Added Product Successfully", "Ok", {
          duration: 2000,
        });
      }
      );
    this.item.name = "";
    this.item.price = 0;
    this.item.quantity = 1;
    this.itemName.focus();

  }
}
