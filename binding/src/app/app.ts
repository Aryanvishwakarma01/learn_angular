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
@Component({
  selector: 'app-root',
  imports: [ BindingExample,Ifelse, Loops, Signals, Twowaybinding, Todo, Directives, RouterOutlet, RouterLink, RouterLinkActive, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('binding');
}
