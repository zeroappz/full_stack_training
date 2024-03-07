import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private router: Router) { }

  onInit() {
    console.log('Signup Component Loaded');
    this.signUpForm.reset();
  }

  signUpForm = new FormGroup({
    firstName: new FormControl(
      'Praveen', Validators.required
    ),
    lastName: new FormControl('Kumar', Validators.required),
    age: new FormControl(Validators.required),
    email: new FormControl('test@gmail.com', Validators.required),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  signInNav() {
    // window.location.href = 'signup'; // using JS window.location
    this.router.navigate(['signin']);
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    // confirm password
    if (this.signUpForm.value.password === this.signUpForm.value.confirmPassword) {
      console.log('Sign Up Success');
    } else {
      console.log('Sign Up Failed');
      alert('Password Do Not Match');
    }
  }

}
