import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Smart-Home';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('vi');
  }

  ngOnInit(): void {
    setInterval(this.clock, 1000);
  }

  clock(): void {
    // Khởi tạo đối tượng timer sử dụng Date Object
    const timer = new Date();
    // Gọi các phương thức của đối tượng timer
    let hour: unknown = timer.getHours(); // Lấy giờ hiện tại (giá trị từ 0 - 23)
    let minute: unknown = timer.getMinutes(); // Lấy phút hiện tại
    let second: unknown = timer.getSeconds(); // Lấy giây  hiện tại

    if (hour < 10) {
      hour = '0' + hour;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (second < 10) {
      second = '0' + second;
    }
    // Hiện thị thời gian lên thẻ div id="clock" với phương thức innerHTML
    document.getElementById('clock').innerHTML =
      hour + ' : ' + minute + ' : ' + second;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toggleLanguage() {
    if (this.translate.getDefaultLang() === 'en') {
      this.translate.setDefaultLang('vi');
    } else if (this.translate.getDefaultLang() === 'vi') {
      this.translate.setDefaultLang('en');
    }
  }
}
