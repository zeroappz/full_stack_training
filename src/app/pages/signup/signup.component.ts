import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor,
    NgForOf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  // country List
  countries = ['India', 'USA', 'UK', 'Australia', 'Canada', 'Japan', 'China'];
  // Gender
  genders = ['Male', 'Female', 'Others'];

  constructor(private router: Router) { }

  onInit() {
    console.log('Signup Component Loaded');
    this.signUpForm.reset();
  }

  signUpForm = new FormGroup({
    firstName: new FormControl(
      'Praveen'
    ),
    lastName: new FormControl('Kumar', Validators.required),
    age: new FormControl(Validators.required),
    email: new FormControl('test@gmail.com', Validators.required),
    password: new FormControl(Validators.pattern('[a-zA-Z0-9]{6, 12}'),),
    confirmPassword: new FormControl(Validators.pattern('[a-zA-Z0-9]{6, 12}')),
    gender: new FormControl('Male', Validators.required),
    country: new FormControl('India', Validators.required),
    address: new FormControl('XYZ, Pune', Validators.required)
  });


  signInNav() {
    // window.location.href = 'signup'; // using JS window.location
    this.router.navigate(['signin']);
  }

  onSubmit() {
    // check the validation
    if (this.signUpForm.invalid) {
      console.log('Invalid Form');
      console.log(this.signUpForm.value);
      return;
    }
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
