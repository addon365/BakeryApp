import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public productForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProductEditComponent>,
   
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
     }

  ngOnInit() {
    //this.productForm = this._formBuilder.group({
      //id: [this.data.id],
      //FirstName: [ this.data.FirstName],
      //LastName: [ this.data.LastName],
      //Contact: [ this.data.Contact],
      //Email: [ this.data.Email ],
    //});
    
  }
  onSubmit(){
    if (isNaN(this.data.id)) {
     // this.productservice.addProduct(this.productForm.value);
      this.dialogRef.close();
    } else {
    // this.productservice.editproduct(this.productForm.value);
      this.dialogRef.close();
    }
  }
}
