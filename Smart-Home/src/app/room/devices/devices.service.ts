/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { on } from 'process';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  //   private Url = 'http://18.163.110.216:3000/api/v1/';
  constructor(private http: HttpClient, private _router: Router) {}

  //   loginUser(user: unknown) {
  //     return this.http.post<unknown>(this.loginUrl, user);
  //   }
  public getListDevices(roomID: unknown) {
    let devices = [
      {
        roomID: 1,
        deviceID: 2,
        name: 'Den',
        status: 'on'
      },
      {
        roomID: 1,
        deviceID: 2,
        name: 'Den',
        status: 'off'
      },
      {
        roomID: 1,
        deviceID: 2,
        name: 'Den',
        status: 'on'
      },
      {
        roomID: 1,
        deviceID: 2,
        name: 'Den',
        status: 'off'
      },
      {
        roomID: 1,
        deviceID: 2,
        name: 'Den',
        status: 'on'
      },
      {
        roomID: 1,
        deviceID: 2,
        name: 'Den',
        status: 'on'
      }
    ];
    console.log('RoomID = ' + roomID);
    return devices;
  }
}
