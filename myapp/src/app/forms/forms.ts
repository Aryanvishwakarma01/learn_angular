import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  name=""
  displayName =""
  email=""
  
  getName(event:Event){
    this.name = (event.target as HTMLInputElement).value;
  }
  showName(){
    this.displayName = this.name
  }

  setName(){
    this.displayName = "Aryan"
  }

  getEmail(val:string){
    console.log(val);
    this.email = val
  }
  setEmail(){
    this.email = "aryanvish86@gmail.com"
  }
}
