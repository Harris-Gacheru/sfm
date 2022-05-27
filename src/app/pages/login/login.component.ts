import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form!:NgForm
  msg = ''

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login()
    this.msg = 'Logged in successfully'

    setTimeout(() => {
      if (this.authService.isLoggedIn && (this.authService.redirectUrl != null)) {
        this.router.navigate([this.authService.redirectUrl])
      }else{
        this.router.navigate(['/'])
      }
    }, 2000)
  }
}
