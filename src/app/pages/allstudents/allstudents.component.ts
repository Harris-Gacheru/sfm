import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/interface/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
  students: Student[] = []

  constructor(private studentService: StudentService) { }
  
  ngOnInit(): void {
    this.students = this.studentService.getStudents()
  }

}
