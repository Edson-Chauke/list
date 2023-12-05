import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clothing } from '../interface/clothing';


@Injectable({
  providedIn: 'root',
})
export class CrudService {


  private apiUrl = 'http://localhost:2000/api'; // This the base URL

  constructor(private http: HttpClient) {}

  // Function to call Node.js endpoint

  // create(clothing: Clothing): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/create`, clothing);
  // }
  // delete(clothing: Clothing): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/this.delete`, clothing);
  // }
  // update(clothing: Clothing): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/update`, clothing);
  // } 
  // read(clothing: Clothing): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/read`, clothing);
  // }
}