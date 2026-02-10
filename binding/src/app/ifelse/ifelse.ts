import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  display = true

  hide(){
    if(this.display==false){
      this.display = true
    }else{
      this.display=false

    }
  }
}
