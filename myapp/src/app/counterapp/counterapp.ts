import { Component } from '@angular/core';

@Component({
  selector: 'app-counterapp',
  imports: [],
  templateUrl: './counterapp.html',
  styleUrl: './counterapp.css',
})
export class Counterapp {
  count:number=0

  handleCounter(val:string){
    if(val=='decrement'){
      this.count = this.count -1
    }else if(val=='increment'){
      this.count = this.count+1;
    }else{
      this.count = 0;
    }
  }
}
