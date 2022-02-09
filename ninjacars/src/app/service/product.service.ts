import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = environment.apiUrl;
  endString: string = "product";


  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get(`${this.apiUrl}/${this.endString}`)
  }

  create(product: Product): Observable<Product> {
    return this.http.post(`${this.apiUrl}/${this.endString}`, product)
  }

  update(product: Product): Observable<Product> {
    return this.http.patch(`${this.apiUrl}/${this.endString}/${product.id}`, product)
  }

  delete(product: Product): Observable<Product> {
    return this.http.delete(`${this.apiUrl}/${this.endString}/${product.id}`, product)
  }
}
