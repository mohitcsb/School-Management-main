import { Component } from '@angular/core';
import { RoutineService } from '../../service/routine.service';

@Component({
  selector: 'app-exam-routine-view',
  templateUrl: './exam-routine-view.component.html',
  styleUrl: './exam-routine-view.component.css'
})
export class ExamRoutineViewComponent {
  examRoutines: any[] = [];

  constructor(private routineService: RoutineService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.routineService.getAllExamRutine().subscribe(
      data => this.examRoutines = data
    )
  }

  loadRoutinesByClass(stclass: string) {
    this.routineService.getExamRutineByClass(stclass).subscribe(
      data => this.examRoutines = data
    )
    console.log(this.examRoutines);
  }
}
