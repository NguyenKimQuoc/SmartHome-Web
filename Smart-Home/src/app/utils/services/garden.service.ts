import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { ApiSettingService } from './apisetting.service';
@Injectable({
  providedIn: 'root'
})
export class GardenDevicesService implements OnDestroy {
  private header: HttpHeaders;
  private subscription: Subscription;
  constructor(
    private http: HttpClient,
    private _cookieService: CookieService,
    private _mqttService: MqttService,
    private _setting: ApiSettingService
  ) {
    this.header = new HttpHeaders({
      Authorization: 'Bearer ' + this._cookieService.get('token')
    });
  }

  //   loginUser(user: unknown) {
  //     return this.http.post<unknown>(this.loginurl, user);
  //   }
  public getListDevicesWatering(): Observable<unknown> {
    return this.http.get<unknown>(this._setting.urlgarden, {
      headers: this.header
    });
  }
  public getDeviceWateringByID(ID: unknown): Observable<unknown> {
    return this.http.get<unknown>(this._setting.urlgarden + ID, {
      headers: this.header
    });
  }
  public changeStateDeviceWateringByID(
    ID: unknown,
    state: string
  ): Observable<unknown> {
    return this.http.put<unknown>(
      this._setting.urlgarden + ID + '?action=' + state,
      '',
      {
        headers: this.header
      }
    );
  }
  public subscribeTopic(topic: string): Observable<IMqttMessage> {
    return this._mqttService.observe(topic);
  }
  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, { qos: 1, retain: true });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
