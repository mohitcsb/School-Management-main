import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudntAddForm } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentAddService {

  baseUrl: string = "http://localhost:8082/admin/student";

  constructor(private http: HttpClient) { }

  saveStudent(data: StudntAddForm): Observable<StudntAddForm> {
    return this.http.post<StudntAddForm>(this.baseUrl, data);

  }

  uploadImg(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(this.baseUrl+"/uploadImg", formData);
  }


  getAllStudents(): Observable<StudntAddForm[]> {
    return this.http.get<StudntAddForm[]>(this.baseUrl);

  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);

  }

  updateStudent(id: number, data: any[]): Observable<StudntAddForm> {
    return this.http.put<StudntAddForm>(`${this.baseUrl}/${id}`, data);

  }

  getAllById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getAllByClass(stclass: string): Observable<StudntAddForm[]> {
    return this.http.get<StudntAddForm[]>(`${this.baseUrl}/class/${stclass}`);
  }

}
