/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private registerUrl = "http://fxips.ddns.net:3000/api/signup"
  private loginUrl = 'http://18.163.110.216:3000/api/v1/login';
  constructor(private http: HttpClient, private _router: Router) {}

  loginUser(user: unknown) {
    return this.http.post<unknown>(this.loginUrl, user);
  }
}
