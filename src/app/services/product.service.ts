import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  API_URL = 'http://localhost:8080/api/product/';
  GET_ACTION = "get";
  ADD_ACTION="add";
  constructor(private httpClient: HttpClient) { }
  getAll() {
    return this.httpClient.get(`${this.API_URL + this.GET_ACTION}`);
  }
  addProduct(item: Product) {
    return this.httpClient.post(`${this.API_URL + this.ADD_ACTION}`, item);
  }
}
