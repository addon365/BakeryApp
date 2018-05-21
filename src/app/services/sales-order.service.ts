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
  public getSalesReport() {
    return this.httpClient.get(`${Utils.getSalesURL()}`);
  }
  addSalesOrder(salesOrder: SalesOrder) {
    return this.httpClient.post(`${Utils.addOrderURL()}`, salesOrder);
  }
  editSalesOrder(salesOrder: SalesOrder) {
    return this.httpClient.post(`${Utils.editOrderURL()}`, salesOrder);
  }
  getStatuses() {
    return this.httpClient.get(`${Utils.getStatusesURL()}`);
  }
}
