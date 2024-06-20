import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({providedIn: 'root'})
export class AuthenticatorService {
  private apiUserUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User | any>{
    return this.http.get(`${this.apiUserUrl}?username=${username}&password=${password}`)
  }

  createUser(username: string, password: string){
    return this.http.post(`${this.apiUserUrl}`, {username, password})
  }

  updateUser(user: User, userId: number){
    return this.http.put(`${this.apiUserUrl}${userId}`, user)
  }

  deleteUser(userId: number){
    return this.http.delete(`${this.apiUserUrl}${userId}`)
  }
}
