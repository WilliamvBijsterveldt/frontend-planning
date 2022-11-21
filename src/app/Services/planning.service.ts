import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Planning } from "../Models/planning";

@Injectable({
  providedIn: 'root'
})

export class PlanningService {

  private baseURL = "http://localhost:8080/planning";

  constructor(private httpClient: HttpClient) { }

  getPlanning(): Observable<Planning[]> {
    return this.httpClient.get<Planning[]>(`${this.baseURL}`);
  }

  createPlanning(planning: Planning): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, planning);
  }

  getPlanningById(id: number): Observable<Planning> {
    return this.httpClient.get<Planning>(`${this.baseURL}/${id}`);
  }

  updatePlanning(id: number, planning: Planning): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, planning);
  }

  deletePlanning(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
