import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/users';
import { Clothing } from '../interface/clothing';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'http://localhost:2000/api';

  userData?: User;

  constructor(private http: HttpClient) {}

  // register function
  register(user: User): Observable<User> {
    console.log(user)
    return this.http.post<User>(`${this.baseUrl}/register`, user);

  }

  // login function
  login(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.baseUrl}/login`, user);
  }
  create(clothing: Clothing): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, clothing);
  }
  delete(clothing: Clothing): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/this.delete`, clothing);
  }
  update(clothing: Clothing): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update`, clothing);
  }
  read(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/items`);
  }
}
