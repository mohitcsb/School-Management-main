import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  examBaseUrl: string = "http://localhost:8082/admin/examrutine";
  classBaseUrl: string = "http://localhost:8082/admin/classrutine";

  constructor(private http: HttpClient) { }

  getAllExamRutine(): Observable<any> {
    return this.http.get<any>(this.examBaseUrl);
  }

  getExamRutineByClass(stclass: string): Observable<any> {
    return this.http.get<any>(`${this.examBaseUrl}/class/${stclass}`);
  }
}
