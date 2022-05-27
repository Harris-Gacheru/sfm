import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false
  redirectUrl: string| null = null

  constructor() { }

  login(){
    this.isLoggedIn =  true
  }

  logout(){
    this.isLoggedIn = false
  }
}
