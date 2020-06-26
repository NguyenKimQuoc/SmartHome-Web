import { Component } from "@angular/core";
@Component({
    templateUrl: "smartlight.component.html",
    selector: "smartlight"
})
export class SmartLightComponent{
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