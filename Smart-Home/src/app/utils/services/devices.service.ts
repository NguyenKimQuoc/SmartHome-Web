/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  private url = Config.endPoint;
  constructor(private http: HttpClient) {}
  public getListDevicesWatering(): Observable<unknown> {
    return this.http.get<unknown>(this.url + 'electronicIrrigationSystem');
  }
  public getDeviceWateringByID(ID: unknown): Observable<unknown> {
    return this.http.get<unknown>(
      this.url + 'electronicIrrigationSystem/' + ID
    );
  }
  public changeStateDeviceWateringByID(
    ID: unknown,
    state: string
  ): Observable<unknown> {
    return this.http.put<unknown>(
      this.url + 'electronicIrrigationSystem/' + ID + '?action=' + state,
      ''
    );
  }
  public getListDevices(roomID: unknown) {
    let devices = [
      {
        roomID: 1,
        deviceID: 2,
        name: 'Đèn 1',
        status: 'on'
      }
    ];
    console.log('RoomID = ' + roomID);
    return devices;
  }
}
