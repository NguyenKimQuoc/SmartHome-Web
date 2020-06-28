import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart-Home';
  ngOnInit(): void {
    setInterval(this.clock,1000);
  }

  clock(){
    //Khởi tạo đối tượng timer sử dụng Date Object
    let timer = new Date();
    //Gọi các phương thức của đối tượng timer
    let hour: any = timer.getHours();  //Lấy giờ hiện tại (giá trị từ 0 - 23)
    let minute: any = timer.getMinutes();  //Lấy phút hiện tại
    let second: any = timer.getSeconds();  //Lấy giây  hiện tại
 
    if(hour < 10) {
       hour = "0" + hour;
    }
    if(minute < 10) {
       minute =  "0" + minute;
    }
    if(second < 10) {
       second =  "0" + second;
    }
    //Hiện thị thời gian lên thẻ div id="clock" với phương thức innerHTML
    document.getElementById("clock").innerHTML = hour + " : " + minute + " : " + second;
  }

  

}
