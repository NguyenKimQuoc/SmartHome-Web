import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
   
  constructor() { }

  ngOnInit(): void {
  }
  items =[]
  addRoom_Func(){
    var roomName = (<HTMLInputElement>document.getElementById("roomName")).value;
    var roomID = (<HTMLInputElement>document.getElementById("roomID")).value;
    var roomDescription = (<HTMLInputElement>document.getElementById("roomDescription")).value;
    var data = {
      "name" : roomName,
      "ID" : roomID,
      "Description" : roomDescription
    }
    this.items.push(data);
    console.log(this.items);
  }
}
