import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CustomerEditComponent } from '../../customer/customer-edit/customer-edit.component';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  public productForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<OrderEditComponent>,
    ) { }
  onNoClick(): void {
    this.dialogRef.close();
   }


  ngOnInit() {
  }

}
