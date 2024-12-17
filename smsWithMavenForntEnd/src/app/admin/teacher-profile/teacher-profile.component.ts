import { Component, OnInit } from '@angular/core';
import { TeacherAddService } from '../../service/teacher-add.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent {
  updateForm: FormGroup

  constructor(private teacherSetvivce:TeacherAddService, private route: ActivatedRoute,  private router: Router, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      tname: [''],
      temail: [''],
      tpassword: [''],
      tphone: [''],
      tfathersname: [''],
      tmothersname: [''],
      tgender: [''],
      tdob: [''],
      tjoiningDate: [''],
      tsalary: [''],
      trole: [''],
      // tphoto: [''],
      tcv: [''],
      tdesignation: ['']
    })

  }

  teacherData: any;
  id: any;


  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getAllById(this.id);
    });


  }
  getAllById(id: number): void {
    this.teacherSetvivce.getAllById(id).subscribe(student => {
      console.log(student);
      this.teacherData = student;

      this.updateForm.get('tname')?.setValue(this.teacherData.tname);
      this.updateForm.get('temail')?.setValue(this.teacherData.temail);
      this.updateForm.get('tpassword')?.setValue(this.teacherData.tpassword);
      this.updateForm.get('tphone')?.setValue(this.teacherData.tphone);
      this.updateForm.get('tfathersname')?.setValue(this.teacherData.tfathersname);
      this.updateForm.get('tmothersname')?.setValue(this.teacherData.tmothersname);
      this.updateForm.get('tgender')?.setValue(this.teacherData.tgender);
      this.updateForm.get('tdob')?.setValue(this.teacherData.tdob);
      this.updateForm.get('tjoiningDate')?.setValue(this.teacherData.tjoiningDate);
      this.updateForm.get('tsalary')?.setValue(this.teacherData.tsalary);
      this.updateForm.get('trole')?.setValue(this.teacherData.trole);
      // this.updateForm.get('tphoto')?.setValue(this.teacherData.tphoto);
      this.updateForm.get('tcv')?.setValue(this.teacherData.tcv);
      this.updateForm.get('tdesignation')?.setValue(this.teacherData.tdesignation);
    });
  }

  deleteStudent(id: number): void {
    console.log(id);
    this.teacherSetvivce.deleteTeacher(id).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/teview');
    }, (error) => {
      console.log(error);
      this.router.navigateByUrl('/teview');
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const teacherData = {
        tcv: this.teacherData.tcv,
        tsalary: this.teacherData.tsalary,
        ...this.updateForm.value,
      }
      console.log(this.teacherData);
      console.log(teacherData);
      this.teacherSetvivce.updateTeacher(this.id, teacherData).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/teview');
      }, (error) => {
        this.router.navigateByUrl('/teview');
      })
      // this.router.navigateByUrl('/teview');
    }
  }
}
