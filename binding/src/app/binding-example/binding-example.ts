import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  imports: [],
  templateUrl: './binding-example.html',
  styleUrl: './binding-example.css',
})
export class BindingExample {
  name=''
  displayName = "";
  getName(event: Event){
    const val = (event.target as HTMLInputElement).value;
    this.name = val;
  }

  showName(){
    this.displayName = this.name;
  }

  setName(){
    this.name = "Aryan"
  }

  email=""

  getEmail(val: string){
    this.email = val
  }

  setEmail(){
    this.email = "default@email.com"
  }


}
