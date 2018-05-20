import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SalesReportDetailsComponent } from '../sales-report-details/sales-report-details.component';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  displayedColumns = ['position', 'name','mobile','total','actionsColumn'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  isPopupOpened = true;
  constructor(  private dialog?: MatDialog) { }
  salesshow(id: number) {
    this.isPopupOpened = true;
  
    const dialogRef = this.dialog.open(SalesReportDetailsComponent, {
     data:{}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  ngOnInit() {
  }
  

}
export interface Element {
  position: number;
  name: string;
  mobile:number;
  total:number;
 
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Captain', mobile:987685665, total:200},
  {position: 2, name: 'Raj', mobile:987685665, total:300},
 
];