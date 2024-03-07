import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  name = new FormControl();
  email = new FormControl();
  password = new FormControl();

  constructor(private router: Router) {
    console.log('Signin Component Constructor Loaded');
  }

  onSubmit() {
    if (this.name.valid && this.email.valid && this.password.valid) {
      console.log('Form Submitted');
      console.log(this.name.value);
      console.log(this.email.value);
      console.log(this.password.value);
      if (this.email.value === 'pravileaf@gmail.com' && this.password.value === '123456') {
        console.log('Login Success');
      } else {
        console.log('Login Failed');
        alert('Login Failed');
      }
    } else {
      console.log('Invalid Form');
    }
  }

  signupNav(){
    // window.location.href = 'signup'; // using JS window.location
    this.router.navigate(['signup']);
  }
}
