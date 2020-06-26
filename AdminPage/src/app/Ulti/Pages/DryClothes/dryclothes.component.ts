import { Component } from "@angular/core";
@Component({
    styleUrls: ["dryclothes.component.css"],
    templateUrl: "dryclothes.component.html",
    selector: "dryclothes"
})
export class DryClothesComponent{
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