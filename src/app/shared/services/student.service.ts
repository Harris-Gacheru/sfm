import { Injectable } from '@angular/core';
import { Student } from '../interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [
    {
      regNo: 'tjc-004-106',
      name: 'Harrison Gacheru', 
      school: 'Multimedia', 
      course: 'Software Engineering', 
      balance : 1000, 
      contactDetails: { 
          email: 'harris@gmail.com', 
          phone: '0705123456' 
      } 
    },
    {
      regNo: 'tjc-004-085',
      name: 'Anna Bree', 
      school: 'COPA', 
      course: 'BBIT', 
      balance : 0, 
      contactDetails: { 
          email: 'anna@gmail.com', 
          phone: '0753323456' 
      } 
    },
    {
      regNo: 'tjc-004-104',
      name: 'Nancy Wangeci', 
      school: 'African Nazarene', 
      course: 'CS', 
      balance : 0, 
      contactDetails: { 
          email: 'nancy@gmail.com', 
          phone: '071223456' 
      } 
    },
    {
      regNo: 'tjc-004-084',
      name: 'Tracy ', 
      school: 'COPA', 
      course: 'BBIT', 
      balance : 234, 
      contactDetails: { 
          email: 'tracy@gmail.com', 
          phone: '0753323456' 
      } 
    },
    {
      regNo: 'tjc-004-089',
      name: 'Lillian Waita', 
      school: 'COPA', 
      course: 'BBIT', 
      balance : 1234, 
      contactDetails: { 
          email: 'lilly@gmail.com', 
          phone: '0753323456' 
      } 
    }
  ] 

  constructor() { }

  addStudent(student: Student){
    this.students.push(student)
  }

  getStudents(){
    return this.students
  }

  getStudent(regno: string){
    return this.students.find(student => student.regNo === regno)
  }

  deleteStudent(regno: string){
    const index = this.students.findIndex(student => student.regNo === regno)
    return this.students.splice(index, 1)
  }

  updateBalance(regno: string, newbalance: number){
    const student = this.getStudent(regno)

    if (student) {
      student.balance = newbalance
    }
  }

  getWithBalance(){
    return this.students.filter(student => student.balance > 0)
  }  

  getWithoutBalance(){
    return this.students.filter(student => student.balance <= 0)
  }
}
