import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar'
import { Homepage} from './homepage/homepage'
import {Counterapp } from './counterapp/counterapp'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Homepage, Counterapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
