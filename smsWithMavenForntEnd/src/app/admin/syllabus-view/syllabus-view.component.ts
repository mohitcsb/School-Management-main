import { Component } from '@angular/core';
import { SyllabusAddService } from '../../service/syllabus-add.service';

@Component({
  selector: 'app-syllabus-view',
  templateUrl: './syllabus-view.component.html',
  styleUrl: './syllabus-view.component.css'
})
export class SyllabusViewComponent {
  syllabusData: any;

  constructor(private syllabusService: SyllabusAddService) {}

  ngOnInit(): void {
    this.syllabusService.getAllSyllabus().subscribe(data => {
      this.syllabusData = data;
    })

    console.log(this.syllabusData);
  }

  ngDoCheck(): void {
    console.log(this.syllabusData);
  }

  deleteSyllabus(id: number) {
    this.syllabusService.deleteSyllabus(id).subscribe(data => {
      console.log(data);
      location.reload();
    })
    location.reload();
  }
}
