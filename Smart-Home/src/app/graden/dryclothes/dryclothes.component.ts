import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dryclothes',
  templateUrl: './dryclothes.component.html',
  styleUrls: ['./dryclothes.component.css']
})
export class DryclothesComponent implements OnInit {

  constructor() { }

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
}
