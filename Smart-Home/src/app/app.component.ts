import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart-Home';


  Login(){
    var url = "http://18.163.110.216:3000/api/v1/login";
    alert("ABC");
  }

}
