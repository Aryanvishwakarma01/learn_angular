import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  
  profileForm = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [
  Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])(?=\\S+$).{8,}$')
])

  })

  onSubmit(){
  if(this.profileForm.valid){
    console.log(this.profileForm.value);
    alert("Form submitted Successfully")
  } else {
    this.profileForm.markAllAsTouched();
  }
}


  // setValues(){
  //   this.profileForm.setValue({
  //     name:'aryan',
  //     password:'aryan123'
  //   })
  // }

  get name(){
    return this.profileForm.get('name')
  }

  get password(){
    return this.profileForm.get('password')
  }
}
