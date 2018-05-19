import { Component, OnInit, Inject } from '@angular/core';
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
  isPopupOpened = true;
  displayedColumns = ['id', 'name', 'quantity', 'price','actionsColumn'];

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
  editproduct(id: number) {
    this.isPopupOpened = true;
   //const product = this.productService.getallproducts().find(p => p.id === id);
    const dialogRef = this.dialog.open(ProductEditComponent, {
     // data: product
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
 
  deleteproduct(id: number) {
    console.log(id);
    console.log(this.products.length);
    const Product = this.products.findIndex(c => c.id === id);
    this.products.splice(Product, 1);
   // for(let i=0;i<this.products.length;i++){
      //if(this.products[i]["name"] == id){
//this.products.splice(id,1);
      }
    }


