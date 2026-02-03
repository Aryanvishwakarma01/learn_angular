import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar'
import { Homepage} from './homepage/homepage'
import {Counterapp } from './counterapp/counterapp'
import {Mouseevent} from './mouseevent/mouseevent'
import {Forms} from './forms/forms'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Homepage, Counterapp,Mouseevent,Forms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
