import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/interface/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  addStudentForm = this.fb.group({
    regNo: ['', Validators.required],
    name: ['', Validators.required],
    school: ['', Validators.required],
    course: ['', Validators.required],
    balance: [0],
    contactDetails: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    })
  })

  student?: Student

  msg: string = ''

  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.student = this.addStudentForm.value
    this.studentService.addStudent(this.student!)
    this.msg = 'Added successfully'

    setTimeout(() => {
      this.msg = ''
      this.router.navigate(['/allstudents'])
    }, 2000);
  }

}
