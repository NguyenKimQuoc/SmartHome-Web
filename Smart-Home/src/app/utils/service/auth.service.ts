import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private registerUrl = "http://fxips.ddns.net:3000/api/signup"
  private loginUrl = 'http://18.163.110.216:3000/api/v1/login';

  private headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

  constructor(private http: HttpClient, private _router: Router) {}

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user, { headers: this.headers });
  }
}
