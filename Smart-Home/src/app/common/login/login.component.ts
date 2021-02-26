import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../utils/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public hide = true;
  public hide1 = true;
  public hide2 = true;
  submitted = false;
  constructor(public auth: AuthService, private fb: FormBuilder) {
    this.userLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  userLogin: FormGroup;
  ngOnInit(): void {
    // none
  }
  get f() {
    return this.userLogin.controls;
  }
  Login(): void {
    this.submitted = true;
    this.auth.loginUser(this.userLogin.value).subscribe(
      (res: any) => {
        console.log(res.token);
        sessionStorage.setItem('token', res.token);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // none
      }
    );
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  };
}
