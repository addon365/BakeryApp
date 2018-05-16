import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  displayedColumns = ['position', 'name', 'mobile','amobile','address','city','pincode','edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  position: number;
  name: string;
  mobile:number;
  amobile:number;
  address:any;
  city:string;
  pincode:number;
  edit:string;
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Captain', mobile:987685665,amobile:876543987,address:'no-2,kovil street,agathiyar nagar',city:'chennai',pincode:600049 , edit:'Edit'},
  {position: 2, name: 'Raj', mobile:987685665,amobile:876543987,address:'no-3,kovil street,agathiyar nagar',city:'chennai',pincode:600049 , edit:'Edit'},
 
];
