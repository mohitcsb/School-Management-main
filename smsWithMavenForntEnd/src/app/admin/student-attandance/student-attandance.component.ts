import { Component, inject } from '@angular/core';
import { StudentAddService } from '../../service/student-add.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AttendanceService } from '../../service/attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-attandance',
  templateUrl: './student-attandance.component.html',
  styleUrl: './student-attandance.component.css'
})
export class StudentAttandanceComponent {
  studentData: any;
  addForm: FormGroup

  constructor(private studentAddService: StudentAddService, private fb: FormBuilder, private attendanceService: AttendanceService, private serviceRouter: Router) {
    this.addForm = this.fb.group({
      sid: [''],
      aattendance: [''],
      a_dates: [''],
      ssid: ['']
    })
  }

  router = inject(Router)

  ngOnInit(): void {
    this.getAllStudentData();
    console.log(this.studentData);
  }

  getAllStudentData() {
    this.studentAddService.getAllStudents().subscribe(data => {
      this.studentData = data;
    })
  }

  onSubmit() {
    console.log(this.addForm.value);
    const aData = {
      student: this.addForm.value.sid,
      aattendance: this.addForm.value.aattendance,
      adates: this.addForm.value.a_dates,
      ssid: this.addForm.value.ssid
    }
    this.attendanceService.addAttendance(aData).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/stattview')
    })
    this.router.navigateByUrl('/stattview')
  }

}
