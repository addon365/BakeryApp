import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  public productForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CustomerEditComponent>,
    ) { }
  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
  }

}
