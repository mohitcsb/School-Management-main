import { Component } from '@angular/core';
import { TeacherAddService } from '../../service/teacher-add.service';
import { StudentAddService } from '../../service/student-add.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  totalStudents: any;
  totalMaleSt: any;
  totalFemaleSt: any;

  totalTeachers: any;
  totalMaleTe: any;
  totalFemaleTe: any;

  totalClass6: any;
  totalFemale6: any;
  totalMale6: any;

  totalClass7: any;
  totalMale7: any;
  totalFemale7: any;

  totalClass8: any;
  totalMale8: any;
  totalFemale8: any;

  totalClass9: any;
  totalMale9: any;
  totalFemale9: any;

  totalClass10: any;
  totalMale10: any;
  totalFemale10: any;

  constructor(private teacherAddService: TeacherAddService, private studentAddService: StudentAddService) {}

  ngOnInit(): void {
    this.teacherAddService.getAllTeachers().subscribe(data => {
      this.totalTeachers = data.length;
      this.totalMaleTe = data.filter((t: any) => t.tgender === 'Male').length;
      this.totalFemaleTe = data.filter((t: any) => t.tgender === 'Female').length;
      console.log(this.totalTeachers, this.totalMaleTe, this.totalFemaleTe);
    })

    this.studentAddService.getAllStudents().subscribe(data => {
      console.log(data);
      this.totalStudents = data.length;
      this.totalMaleSt = data.filter((s: any) => s.stgender === 'Male').length;
      this.totalFemaleSt = data.filter((s: any) => s.stgender === 'Female').length;

      this.totalClass6 = data.filter((s: any) => s.stClass === '6').length;
      this.totalMale6 = data.filter((s: any) => s.stgender === 'Male' && s.stClass === '6').length;
      this.totalFemale6 = data.filter((s: any) => s.stgender === 'Female' && s.stClass === '6').length;

      this.totalClass7 = data.filter((s: any) => s.stClass === '7').length;
      this.totalMale7 = data.filter((s: any) => s.stgender === 'Male' && s.stClass === '7').length;
      this.totalFemale7 = data.filter((s: any) => s.stgender === 'Female' && s.stClass === '7').length;

      this.totalClass8 = data.filter((s: any) => s.stClass === '8').length;
      this.totalMale8 = data.filter((s: any) => s.stgender === 'Male' && s.stClass === '8').length;
      this.totalFemale8 = data.filter((s: any) => s.stgender === 'Female' && s.stClass === '8').length;

      this.totalClass9 = data.filter((s: any) => s.stClass === '9').length;
      this.totalMale9 = data.filter((s: any) => s.stgender === 'Male' && s.stClass === '9').length;
      this.totalFemale9 = data.filter((s: any) => s.stgender === 'Female' && s.stClass === '9').length;

      this.totalClass10 = data.filter((s: any) => s.stClass === '10').length;
      this.totalMale10 = data.filter((s: any) => s.stgender === 'Male' && s.stClass === '10').length;
      this.totalFemale10 = data.filter((s: any) => s.stgender === 'Female' && s.stClass === '10').length;
    })
  }

}
