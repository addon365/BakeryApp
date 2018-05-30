import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SalesOrder } from '../../models/sales-order';

@Component({
  selector: 'app-printcheck',
  templateUrl: './printcheck.component.html',
  styleUrls: ['./printcheck.component.css']
})
export class PrintcheckComponent implements OnInit {

  today: number = Date.now();
  
  constructor(
    private dialogRef: MatDialogRef<PrintcheckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SalesOrder
    ) {
      
     }
  

  ngOnInit() {
    console.log(this.data.orderItems);
  
  }
  @ViewChild('printsection') printsection: ElementRef;
 
  print(): void {
    let printContents, popupWin;
    
    printContents = document.getElementById('printsection').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
       
          <style>
          html, body {
          
            display: block; 
            font-family: "Calibri";
            margin: 0px;
            font-size:auto;
        }
       
          @page{
          size:80mm 20mm;
         
          }
       
        .text-center{
          text-align:center;
        }
        .center{
          text-align:center;
        }
        .table {
          width: 100%;
          max-width: 100%;
          margin-bottom: 20px;
      }
          </style>
        </head>
    <body onload="window.print();window.close()"> ${printContents}</body>
      </html>`
    );
    popupWin.document.close();
} 
}
