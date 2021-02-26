import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiSettingService {
  public url: string;
  public urlgarden: string;
  public urlauth: string;
  public urlroom: string;
  constructor() {
    this.url = '';
    this.urlgarden = this.url + '/api/v1/getElectronicIrrigationSystem/';
    this.urlauth = this.url + 'api/v1/login/';
  }
}
