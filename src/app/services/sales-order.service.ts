import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';
import { SalesOrder } from '../models/sales-order';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {

  constructor(private httpClient: HttpClient) { }
  public getAll() {
    return this.httpClient.get(`${Utils.getOrderURL()}`);
  }
  addSalesOrder(salesOrder: SalesOrder) {
    return this.httpClient.post(`${Utils.addOrderURL()}`, salesOrder);
  }
}
