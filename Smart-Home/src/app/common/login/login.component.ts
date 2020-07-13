import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../utils/services/auth.service';
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
    this.auth.loginUser(this.userLogin.value).subscribe(
      (res: any) => {
        console.log(res.token);
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
