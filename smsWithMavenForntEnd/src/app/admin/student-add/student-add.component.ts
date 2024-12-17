import { Component, OnInit } from '@angular/core';
import { StudntAddForm } from '../../model/student.model';
import { StudentAddService } from '../../service/student-add.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent implements OnInit {


  studentModel: StudntAddForm=new StudntAddForm();
  formValue!: FormGroup;
  studentData!: StudntAddForm[];

  constructor(private formBuilder: FormBuilder, private studentService: StudentAddService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      batchId: ['', [Validators.required]],
      session: ['', [Validators.required]],
      stClass: ['', [Validators.required]],
      stfirstname: ['', [Validators.required]],
      stlastname: ['', [Validators.required]],
      stemail: ['', [Validators.required]],
      stfathersname: ['', [Validators.required]],
      stmothersname: ['', [Validators.required]],
      stpassword: ['', [Validators.required]],
      strole: ['', [Validators.required]],
      stdob: ['', [Validators.required]],
      staddress: ['', [Validators.required]],
      stgender: ['', [Validators.required]],
      stphone: ['', [Validators.required]],
      // stPhoto: ['', [Validators.required]]
    });
  }



  images?:File
  getImages(event:any){
    this.images=event.target.files[0];
    console.log(this.images);
  }

  submitted: boolean = false;


  savestudent(): void {
    console.log(this.formValue.value);
    console.log(this.formValue.valid);

    this.studentModel.batchId = this.formValue.value.batchId;
    this.studentModel.session = this.formValue.value.session;
    this.studentModel.stClass = this.formValue.value.stClass;
    this.studentModel.stRoll = this.formValue.value.stRoll;
    this.studentModel.stfirstname = this.formValue.value.stfirstname;
    this.studentModel.stlastname = this.formValue.value.stlastname;
    this.studentModel.stemail = this.formValue.value.stemail;
    this.studentModel.stfathersname = this.formValue.value.stfathersname;
    this.studentModel.stmothersname = this.formValue.value.stmothersname;
    this.studentModel.stRoll = this.formValue.value.strole;
    this.studentModel.stdob = this.formValue.value.stdob;
    this.studentModel.staddress = this.formValue.value.staddress;
    this.studentModel.stgender = this.formValue.value.stgender;
    this.studentModel.stphone = this.formValue.value.stphone;
    this.studentModel.stpassword = "1234";

    console.log(this.studentModel);

    this.studentService.saveStudent(this.studentModel)
    .subscribe(
      res => {
        console.log(res);
        alert("Student Added Successfully");
        this.formValue.reset();
        // this.getAll();
      },
      err => {
        console.log(err);
        alert("Something went wrong while saving the student data.");
      }
    );

  }
}

