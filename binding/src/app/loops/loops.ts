import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.html',
  styleUrl: './loops.css',
})
export class Loops {
  users=['Aryan', 'Ayush', 'Jasnoor', 'Awdhesh'];

  students = [
    {name:"Anil", age:24},
    {name:"Aryan", age:24},
    {name:"Ayus", age:24},
    {name:"abhi", age:24}
  ]

  getName(val:string){
    alert(val);
    
  }
}
