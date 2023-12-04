import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private baseUrl = 'http://localhost:8000/api'

userData?: User;

  constructor(private http: HttpClient) { }

// register function
register(users:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl})/register`, users
  );
}

// login function
login(users:User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/login`, users
);
}

}

