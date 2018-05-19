import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  isPopupOpened = true;
  displayedColumns = ['position', 'name', 'mobile','amobile','address','actioncolumn'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(  private dialog?: MatDialog) { }
  editcustomer(id: number) {
    this.isPopupOpened = true;
  
    const dialogRef = this.dialog.open(CustomerEditComponent, {
     data:{}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
  deletecustomer(id:number){
console.log(id)
  }

  ngOnInit() {
  }

}
export interface Element {
  position: number;
  name: string;
  mobile:number;
  amobile:number;
  address:any;
 
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Captain', mobile:987685665,amobile:876543987,address:'no-2,kovil street,agathiyar nagar'},
  {position: 2, name: 'Raj', mobile:987685665,amobile:876543987,address:'no-3,kovil street,agathiyar nagar'},
 
];
