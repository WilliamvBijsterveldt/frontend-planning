import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }

  public generateToken(request: string) {
    return this.http.post("http://localhost:8080/token", request, {responseType: 'text' as 'json'});
  }
}
