import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatBottomSheet, MatBottomSheetRef, MatInput } from '@angular/material';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  @ViewChild('focuses') searchinput: ElementRef;
  carItems:Array<Product>=[];
  @HostListener('document:keyup', ['$event'])
  focus(event: KeyboardEvent): void {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 113) {
      
      this.searchinput.nativeElement.focus();
    

    }
  }
  myControl: FormControl = new FormControl();
  public options: Array<Product> = [];
  filteredOptions: Observable<any[]>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll()
      .subscribe((resultData: Array<Product>) => {
        this.options = resultData;
      });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }
  filter(val: any): any[] {
    return this.options.filter(option => option.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  selectedOption: Product;
  onSelect(option): void {
    this.selectedOption = option;
  }
  cartitem: Product;
  receiveCartItem($event) {
    this.cartitem = $event;
  }
  
  selectproduct: boolean = false;
  onProduct(): void {
    this.selectproduct = !this.selectproduct;
  }
}
