import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.formAddDevice = this.formBuilder.group({
      name: [''],
      ID: [''],
      roomID: ['']
    });
  }

  ngOnInit(): void {
  }

  checked = false;
  slidename: any = "Đang Tắt"
  changed() {
    this.checked = !this.checked;
    if (this.checked)
      this.slidename = "Đang Bật"
    else
      this.slidename = "Đang Tắt"
  }
  addTime() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "datetime-local");
    document.getElementById("datetime-item").appendChild(x);
  }
  checkedWaterTree = true;
  slidenameWT: any = "Tưới Đang Bật";
  changedWaterTree() {
    this.checkedWaterTree = !this.checkedWaterTree;
    if (this.checkedWaterTree)
      this.slidenameWT = "Tưới Đang Bật"
    else
      this.slidenameWT = "Tưới Đang Tắt"
  }
  waterlevel = 10;
  formAddDevice: FormGroup;
  // test
  watering_devices = [{
    "ID": 1,
    "name": "May bom 1"
  },
  {
    "ID": 2,
    "name": "May bom 2"
  },
  {
    "ID": 3,
    "name": "May bom 3"
  },
  {
    "ID": 4,
    "name": "May bom 4"
  },
  {
    "ID": 5,
    "name": "May bom 5"
  },
  {
    "ID": 6,
    "name": "May bom 6"
  },
  {
    "ID": 7,
    "name": "May bom 7"
  }];
  // test
  drying_devices = [{
    "ID": 1,
    "name": "Bat 1"
  },
  {
    "ID": 2,
    "name": "Bat 2"
  }];

  itemDevice: any;
  DeviceCate = '';
  AddDevice() {
    console.warn(this.formAddDevice.controls['name'].value);
    console.log("Add device cho: " + this.DeviceCate)
  }
  // cho biết đang ở thiết bị có ID mấy
  ChangeID(value: Object) {
    console.log(value)
    this.itemDevice = value;
    console.log(this.itemDevice);
  }
  // Set các trạng thái tại thiết bị đó(dùng chung cho drying và watering)
  setSTT(cate: string) {
    console.log(this.itemDevice);
  }
}
