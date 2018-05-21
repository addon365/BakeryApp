import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  displayedColumns = ['id', 'name', 'quantity', 'price','actionsColumn'];
  @Input() public selectedItem:Product;
  public products: Array<Product> = [];
  public dataSource = new MatTableDataSource(this.products);

  constructor(private productService: ProductService, private dialog?: MatDialog) { }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.productService.getAll()
      .subscribe((resultData: Array<Product>) => {
        this.products = resultData;
        this.dataSource = new MatTableDataSource(this.products);
      });
  }
  editproduct(product:Product) {
   this.selectedItem=product;
  }
 
  deleteproduct(id: number) {
    
      }
    }


