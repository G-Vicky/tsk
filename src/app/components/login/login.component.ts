import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  active: number = 1;
  constructor() {}

  ngOnInit(): void {}

  registerUser(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log('Registering user', registerForm.value);
    }
  }

  loginUser(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log('Logging user', loginForm.value);
    }
  }
}
