import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  constructor() {
    // none
  }

  ngOnInit(): void {
    // none
  }
  items = [];
  addRoom_Func(): void {
    const roomName = (<HTMLInputElement>document.getElementById('roomName'))
      .value;
    const roomID = (<HTMLInputElement>document.getElementById('roomID')).value;
    const roomDescription = (<HTMLInputElement>(
      document.getElementById('roomDescription')
    )).value;
    const data = {
      name: roomName,
      ID: roomID,
      Description: roomDescription
    };
    this.items.push(data);
    console.log(this.items);
  }
}
