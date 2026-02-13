import { Component, Directive, signal } from '@angular/core';
import {BindingExample} from './binding-example/binding-example';
import { Ifelse } from './ifelse/ifelse';
import { Loops } from './loops/loops';
import { Signals } from './signals/signals';
import { Twowaybinding } from './twowaybinding/twowaybinding';
import { Todo } from './todo/todo';
import { Directives } from './directives/directives';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './header/header';
import { Forms } from './forms/forms';
@Component({
  selector: 'app-root',
  imports: [ BindingExample,Ifelse, Loops, Signals, Twowaybinding, Todo, Directives, RouterOutlet, RouterLink, RouterLinkActive, Header, Forms],
  templateUrl: './app.html',
  // template:`
  //   <h1>Angular Standalone Nested Routing Example</h1>
  //   <nav>
  //   <a routerLink="/dashboard">Dashboard</a>
  //   </nav>
  //   <hr>
  //   <router-outlet></router-outlet>
  // `, 
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('binding');
}
