/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GardenDevicesService {
  private Url = 'http://18.163.110.216:3000/api/v1/';
  constructor(private http: HttpClient, private _router: Router) {}
  token = '';
  //   loginUser(user: unknown) {
  //     return this.http.post<unknown>(this.loginUrl, user);
  //   }
  public getListDevicesWatering() {
    const header = new HttpHeaders({
      Authorization: 'Bearer' + this.token
    });
    return this.http.get<unknown>(this.Url + 'electronicIrrigationSystem', {
      headers: header
    });
  }
}
