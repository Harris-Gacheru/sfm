import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/interface/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-studentswithoutbalance',
  templateUrl: './studentswithoutbalance.component.html',
  styleUrls: ['./studentswithoutbalance.component.css']
})
export class StudentswithoutbalanceComponent implements OnInit {

  students: Student[] = []

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getWithoutBalance()    
  }

}
