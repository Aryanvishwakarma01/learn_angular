import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  show= false

  students=["Anil", "Sam", "John", "Smith", "Rohit"]

  studentData = [
    {name: "Anil", age: 25, city: "Delhi"},
    {name: "Sam", age: 22, city: "Mumbai"},
    {name: "John", age: 28, city: "Bangalore"},
    {name: "Smith", age: 30, city: "Chennai"},
    {name: "Rohit", age: 27, city: "Hyderabad"}
  ]
}
