import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Data } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  displayedColumns = ['position', 'customername','mobile', 'advance','total','orderedDate','expectedDate','orderedTime','expectedTime','orderStatus','shop'];
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
  advance:number;
  total:number;
  orderedDate:number;
  expectedDate:number;
  orderedTime:any;
  expectedTime:any;
  orderStatus:any;
  shop:number;
  mobile:number;
 
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Captain',mobile:908766543, advance:100,total:500,orderedDate:1/10/2018,expectedDate:2/11/2018,orderedTime:'4:00Am',expectedTime:'5:30Am',orderStatus:'pending',shop:2},
  {position: 2, name: 'raj',mobile:808766543, advance:400,total:600,orderedDate:5/10/2018,expectedDate:4/11/2018,orderedTime:'6:00Am',expectedTime:'8:30Am',orderStatus:'received',shop:1},
 
];