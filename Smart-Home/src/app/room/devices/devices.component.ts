/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DevicesService } from './devices.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-devices-room',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  roomID: unknown;
  devices = [];
  status = false;
  clickedDevice: any;
  changedStatus(enable: boolean, item: any): void {
    item.status = enable ? 'on' : 'off';
    console.log(item);
  }
  selectDevice(item: any): void {
    this.clickedDevice = item;
  }
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _DevicesService: DevicesService
  ) {}
  sub: Subscription;
  ngOnInit(): void {
    this.sub = this._ActivatedRoute.paramMap.subscribe((params) => {
      this.roomID = params.get('roomID');
      console.log(this.roomID);
      // eslint-disable-next-line prefer-const
      this.devices = this._DevicesService.getListDevices(this.roomID);
      console.log(this.devices);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this._Router.navigate(['room']);
  }
}
