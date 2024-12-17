import { Component } from '@angular/core';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrl: './attendance-view.component.css'
})
export class AttendanceViewComponent {
  attData: any;

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.getAllAttendance();
    console.log(this.attData);
  }

  ngDoCheck(): void {
    console.log(this.attData);
  }

  getAllAttendance() {
    this.attendanceService.getAllAttendance().subscribe(data => {
      this.attData = data;
    })
  }
}
