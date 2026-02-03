import { Component } from '@angular/core';

@Component({
  selector: 'app-mouseevent',
  imports: [],
  templateUrl: './mouseevent.html',
  styleUrl: './mouseevent.css',
})
export class Mouseevent {
  handleClick(event:MouseEvent){
    console.log("This is a mouse event named as ",event.type);
  }

  handleMouseEnter(event:MouseEvent){
    console.log("This is a mouse event named as ",event.type);
  }
  handleMouseOver(event:MouseEvent){
    console.log("This is a mouse event named as ",event.type);
  }
  handleMouseLeave(event:MouseEvent){
    console.log("This is a mouse event named as ",event.type);
  }

  handleInput(event:any){
     console.log(event.type)
    console.log("value is",(event.target as HTMLInputElement).value)
    }
}
