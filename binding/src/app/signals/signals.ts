import { Component,computed, Signal, signal, WritableSignal } from '@angular/core';
import { effect } from '@angular/core';
@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count: WritableSignal<number>= signal(10)
  num: Signal<number> = computed(()=>20)
  // constructor(){
  //   effect(()=>{
  //     console.log(this.count());
      
  //   })
  // } 

  updateCount(val:string){
    if(val=='inc'){
      this.count.set(this.count()+1)
    }else{
      this.count.set(this.count()-1)
    }
  }

  x= signal(10)
  y = signal(20)
  z = computed(()=> this.x() + this.y())

  showValue(){
    console.log(this.z());
    this.x.set(100)
    console.log(this.z());
  }

  userName = signal('aryan')

  constructor(){
    effect(()=> {
      console.log(this.userName());
      
    })
  }
}
