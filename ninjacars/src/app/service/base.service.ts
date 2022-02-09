import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {id: number}> {

  
  apiUrl: string = environment.apiUrl;
  endString: string = "";


  constructor(private http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.endString}`)
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.endString}/${id}`)

  }

  create(product: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.endString}`, product)
  }

  update(product: T): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${this.endString}/${product.id}`, product)
  }

  delete(product: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${this.endString}/${product.id}`)
  }

}
