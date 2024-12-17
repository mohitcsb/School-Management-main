import { Component, OnInit } from '@angular/core';
import { StudentAddService } from '../../service/student-add.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  updateForm: FormGroup

  constructor(private studntSetvivce:StudentAddService, private route: ActivatedRoute,  private router: Router, private fb: FormBuilder){
    this.updateForm = this.fb.group({
      stfirstname: [''],
      stlastname: [''],
      stemail: [''],
      stfathersname: [''],
      stmothersname: [''],
      stpassword: [''],
      strole: [''],
      stdob: [''],
      staddress: [''],
      stgender: [''],
      stphone: [''],
      // stPhoto: ['']
    })
  }

  studentData: any;
  id: any;


  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.getAllById(this.id);
    });


  }
  getAllById(id: number): void {
    this.studntSetvivce.getAllById(id).subscribe(student => {
      this.studentData = student;
      this.updateForm.get('stfirstname')?.setValue(this.studentData.stfirstname);
      this.updateForm.get('stlastname')?.setValue(this.studentData.stlastname);
      this.updateForm.get('stemail')?.setValue(this.studentData.stemail);
      this.updateForm.get('stfathersname')?.setValue(this.studentData.stfathersname);
      this.updateForm.get('stmothersname')?.setValue(this.studentData.stmothersname);
      this.updateForm.get('stpassword')?.setValue(this.studentData.stpassword);
      this.updateForm.get('strole')?.setValue(this.studentData.strole);
      this.updateForm.get('stdob')?.setValue(this.studentData.stdob);
      this.updateForm.get('staddress')?.setValue(this.studentData.staddress);
      this.updateForm.get('stgender')?.setValue(this.studentData.stgender);
      this.updateForm.get('stphone')?.setValue(this.studentData.stphone);
    });
  }

  deleteStudent(id: number): void {
    console.log(id);
    this.studntSetvivce.deleteStudent(id).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/stview');
    }, (error) => {
      console.log(error);
      this.router.navigateByUrl('/stview');
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const studentData = {
        stRoll: this.studentData.stRoll,
        stClass: this.studentData.stClass,
        session: this.studentData.session,
        batchId: this.studentData.batchId,
        ...this.updateForm.value,
      }
      console.log(this.studentData);
      console.log(studentData);
      this.studntSetvivce.updateStudent(this.id, studentData).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/stview');
      }, (error) => {
        this.router.navigateByUrl('/stview');
      })
      this.router.navigateByUrl('/stview');
    }
  }
}
