import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/interface/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-displaystudent',
  templateUrl: './displaystudent.component.html',
  styleUrls: ['./displaystudent.component.css']
})
export class DisplaystudentComponent implements OnInit {
  regno: string = ''
  student?: Student 
  msg: string = ''

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.regno = params['regno']
      
        this.student = this.studentService.getStudent(this.regno)
    })
  }

  deleteStudent(regno: string){
    this.studentService.deleteStudent(regno)
    this.msg = 'Student has been deleted successfully'
    
    setTimeout(() => {
      this.msg = ''
      this.router.navigate(['/allstudents'])
    }, 2000);
  }

}
