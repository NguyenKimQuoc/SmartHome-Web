/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GardenDevicesService } from '../../services/garden.service';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css'],
  providers: [GardenDevicesService]
})
export class GardenComponent implements OnInit {
  formAddDevice: FormGroup;
  formAddTime: FormGroup;
  subscription: Subscription;
  wateringDevices: unknown = [
    {
      deviceName: 'vòi 1',
      deviceId: '1',
      type: 'watering',
      zone: 'xxx',
      state: [
        {
          deviceState: 'off',
          timerState: 'off'
        }
      ],
      permission: [],
      action: 'on'
    }
  ];
  dryingdevices = [
    {
      ID: 1,
      name: 'Bạt 1'
    },
    {
      ID: 2,
      name: 'Bạt 2'
    }
  ];
  itemDevice: any = []; // lưu data item được chọn để setting
  constructor(
    private formBuilder: FormBuilder,
    public _api: GardenDevicesService
  ) {
    this.formAddDevice = this.formBuilder.group({
      name: [''],
      ID: [''],
      roomID: ['']
    });
    this.formAddTime = this.formBuilder.group({
      time: ['']
    });
    this._api.getListDevicesWatering().subscribe((res: any) => {
      this.wateringDevices = res.data;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    this.subscribeToTopic();
  }
  changed(status: boolean) {
    this.itemDevice.action = status ? 'on' : 'off';
  }
  checkedWaterTree = true;
  slidenameWT = 'ON';
  changedWaterTree() {
    this.checkedWaterTree = !this.checkedWaterTree;
    if (this.checkedWaterTree) this.slidenameWT = 'ON';
    else this.slidenameWT = 'OFF';
  }
  waterlevel = 10;
  timerWatering = [];
  DeviceCate = '';
  AddDevice() {
    console.warn(this.formAddDevice.controls['name'].value);
    console.log('Add device cho: ' + this.DeviceCate);
  }
  // cho biết đang ở thiết bị có ID mấy
  getDataByID(value: any) {
    console.log(value);
    if (value.type == 'watering') {
      this._api.getDeviceWateringByID(value._id).subscribe((res: any) => {
        console.log(res);
        this.itemDevice = res.data;
      });
    }
  }
  // Set các trạng thái tại thiết bị đó(dùng chung cho drying và watering)
  setSTT(value: any) {
    console.log(value.type);
    this._api.unsafePublish('myTopic', 'Send from angular');
    if (value.type == 'watering') {
      console.log(value.action);
      this._api
        .changeStateDeviceWateringByID(this.itemDevice._id, value.action)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
  // Demo addtime for watering
  addTime() {
    console.log(this.formAddTime.value);
    this.timerWatering.push(this.formAddTime.value);
  }
  private subscribeToTopic() {
    this.subscription = this._api
      .subscribeTopic('myTopic')
      .subscribe((data: IMqttMessage) => {
        const item = data.payload.toString();
        console.log(item);
      });
  }
}
