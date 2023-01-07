import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/users`);
  }

  registerUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/users`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/users/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/users/${id}`);
  }
}
