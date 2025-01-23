import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  token: string = '';
  user: any;
  constructor(
    private router: Router,
  ) {}

  isAuthenticated() {
    this.token = localStorage.getItem('token') ?? '';
    const decode: JwtPayload | any = jwtDecode(this.token);
    const exp = decode.exp;
    const now = new Date().getTime() / 1000;

    if(now > exp){
      this.router.navigateByUrl("/login");
      return false;
    }

    this.user.id = decode["Id"];
    this.user.name = decode["Name"];
    this.user.email = decode["Email"];
    this.user.userName = decode["userName"];

    return true;
  }
}
