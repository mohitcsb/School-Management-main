import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  baseUrl: string = "http://localhost:8082/admin/attendance";

  constructor(private http: HttpClient) { }

  getAllAttendance(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addAttendance(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
