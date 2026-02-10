import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { ReactiveFormsModule, FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { email } from '@angular/forms/signals';
import { Observable } from 'rxjs';

const myObservable = new Observable(observer => {
  observer.next('Hello');
  observer.next('RxJS');
  observer.complete();
});

myObservable.subscribe(value => {
  console.log(value);
});


@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
    // FormGroup representing entire form
  // registerForm: FormGroup;

  // constructor(private fb: FormBuilder) {

  //   // Creating form using FormBuilder
  //   this.registerForm = this.fb.group({

  //     name: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(3),
  //     ]),

  //     email: ['', [Validators.required, Validators.email]],

  //     password: ['', Validators.required],

  //     age: [null, Validators.min(18)]
  //   });
  // }

  // onSubmit() {
  //   console.log(this.registerForm.value);

  //   if (this.registerForm.valid) {
  //     alert('Form Submitted Successfully!');
  //   }
  // }

  formData = {
    name: '',
    email : '',
  };

  constructor(private http: HttpClient) {}

submitForm() {
    this.http.post(
      'https://didactic-guide-x59g655wg6gw36wjx-3000.app.github.dev/api/register',
      this.formData
    ).subscribe({
      next: (res) => {
        console.log(res);
        alert('Form submitted successfully!');
      },
      error: err => console.error(err)
    });
  }
}
