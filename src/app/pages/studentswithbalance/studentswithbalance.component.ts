import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/interface/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-studentswithbalance',
  templateUrl: './studentswithbalance.component.html',
  styleUrls: ['./studentswithbalance.component.css']
})
export class StudentswithbalanceComponent implements OnInit {
  students: Student[] = []

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getWithBalance()    
  }

}
