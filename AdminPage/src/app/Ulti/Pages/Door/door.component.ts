import { Component, OnInit } from "@angular/core";
@Component({
    styleUrls: ["door.component.css"],
    templateUrl: "door.component.html",
    selector: "door"
})

export class DoorComponent {
    checked = false;
    slidename:any = "Đang Tắt"
    changed() {
        this.checked = !this.checked;
        if(this.checked)
            this.slidename = "Đang Bật"
        else
            this.slidename = "Đang Tắt"
    }
}