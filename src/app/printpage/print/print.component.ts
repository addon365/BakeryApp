import { Component, OnInit, ViewChild, ElementRef, inject, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SalesOrder } from '../../models/sales-order';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  public productForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PrintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SalesOrder
    ) {
      console.log(data);
     }
  

  ngOnInit() {
    console.log(this.data.orderItems);
  }

  @ViewChild('printsection') printsection: ElementRef;
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('printsection').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open('', 'printsection', 'height=10mm,width=72mm');
    popupWin.document.write(`
      <html>
        <head>
        <link rel="stylesheet" href="../paper.css">
          <style>
@page{
 size:100mm 300mm
}
       
        .text-center{
          text-align:center;
        }
       
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
} 



}
