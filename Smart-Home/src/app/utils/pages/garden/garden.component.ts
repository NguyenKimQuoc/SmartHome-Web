/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GardenDevicesService } from '../../services/garden.service';
@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css'],
  providers: [GardenDevicesService]
})
export class GardenComponent implements OnInit {
  formAddDevice: FormGroup;
  formAddTime: FormGroup;
  wateringDevices: unknown = [
    {
      ID: 1,
      name: 'Máy bom 1'
    },
    {
      ID: 2,
      name: 'Máy bom 2'
    },
    {
      ID: 3,
      name: 'Máy bom 3'
    },
    {
      ID: 4,
      name: 'Máy bom 4'
    },
    {
      ID: 5,
      name: 'Máy bom 5'
    },
    {
      ID: 6,
      name: 'Máy bom 6'
    },
    {
      ID: 7,
      name: 'Máy bom 7'
    }
  ];
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
      hour: [''],
      minute: ['']
    });
    // this._api.getListDevicesWatering().subscribe((res) => {
    //   this.wateringDevices = res;
    // });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  checked = false;
  autoStatus = 'OFF';
  changed() {
    this.checked = !this.checked;
    if (this.checked) this.autoStatus = 'ON';
    else this.autoStatus = 'OFF';
  }
  checkedWaterTree = true;
  slidenameWT = 'ON';
  changedWaterTree() {
    this.checkedWaterTree = !this.checkedWaterTree;
    if (this.checkedWaterTree) this.slidenameWT = 'ON';
    else this.slidenameWT = 'OFF';
  }
  waterlevel = 10;
  // test

  // test
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
  timerWatering = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemDevice: any;
  DeviceCate = '';
  AddDevice() {
    console.warn(this.formAddDevice.controls['name'].value);
    console.log('Add device cho: ' + this.DeviceCate);
  }
  // cho biết đang ở thiết bị có ID mấy
  ChangeID(value: unknown) {
    console.log(value);
    this.itemDevice = value;
    console.log(this.itemDevice);
  }
  // Set các trạng thái tại thiết bị đó(dùng chung cho drying và watering)
  setSTT(cate: string) {
    console.log(cate);
  }
  // Demo addtime for watering
  addTime() {
    this.timerWatering.push(this.formAddTime.value);
  }
}
