import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.userLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  userLogin: FormGroup;
  ngOnInit(): void {
    // none
  }

  Login(): void {
    const user =
      'email=' +
      this.userLogin.controls['email'].value +
      '&password=' +
      this.userLogin.controls['password'].value;

    this.auth.loginUser(user).subscribe(
      (res) => {
        console.log(res);
        (<HTMLInputElement>document.getElementById('btn-login')).style.display =
          'none';
      },
      (error) => {
        console.log(error);
      },
      () => {
        // none
      }
    );
  }
}
