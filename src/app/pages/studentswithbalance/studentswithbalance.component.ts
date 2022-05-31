import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Student } from 'src/app/shared/interface/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-studentswithbalance',
  templateUrl: './studentswithbalance.component.html',
  styleUrls: ['./studentswithbalance.component.css']
})
export class StudentswithbalanceComponent implements OnInit {
  students: Student[] = []

  searchForm = this.fb.group({
    searchString: ['']
  })

  constructor(private studentService: StudentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.students = this.studentService.getWithBalance()    
  }

}
