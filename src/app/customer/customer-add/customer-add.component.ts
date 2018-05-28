import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput, MatSnackBar } from '@angular/material';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  @ViewChild('customerNameInput') customerName: MatInput;
  public customer: Customer
    = new Customer(-1, "", "", '');
  constructor(private customerservice:CustomerService,public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.customerName.focus();
  } 
  onSubmit() {

    this.customerservice.addCustomer(this.customer)
      .subscribe((response) => {
        this.snackBar.open("Added Customer Successfully", "Ok", {
          duration: 2000,
        });
      }
      );
    this.customer.name = "";
    this.customer.mobile = "1";
    this.customer.alternateMobile = "23";
    this.customerName.focus();

  }

}
