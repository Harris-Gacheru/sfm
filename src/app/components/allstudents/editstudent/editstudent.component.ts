import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/interface/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  regno: string = ''
  student?: Student 
  msg: string = ''
  balance: number = 234

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.regno = params['regno']
      
        this.student = this.studentService.getStudent(this.regno)
    })
  }

  updateBalance(balance: string){
    const bal = parseInt(balance)
    this.studentService.updateBalance(this.regno, bal)
    this.msg = 'Balance updated successfully'

    setTimeout(() => {
      this.msg = ''
      this.router.navigate(['../'],{relativeTo:this.route})
    }, 1400)
  }

}
