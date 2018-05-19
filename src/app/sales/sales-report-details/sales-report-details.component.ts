import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-sales-report-details',
  templateUrl: './sales-report-details.component.html',
  styleUrls: ['./sales-report-details.component.css']
})
export class SalesReportDetailsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'quantity', 'price','total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SalesReportDetailsComponent>,
    ) { }
  onNoClick(): void {
    this.dialogRef.close();
   }



  ngOnInit() {
  }

}
export interface Element {
  id: number;
  name: string;
  quantity:number;
  price:number;
  total:number;
 
}
const ELEMENT_DATA: Element[] = [
  {id: 1, name: 'Captain', quantity:2,price:50,total:100 },
  {id: 2, name: 'raj', quantity:2,price:50,total:100 },
 
];
