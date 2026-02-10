import { Component, Directive, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BindingExample} from './binding-example/binding-example';
import { Ifelse } from './ifelse/ifelse';
import { Loops } from './loops/loops';
import { Signals } from './signals/signals';
import { Twowaybinding } from './twowaybinding/twowaybinding';
import { Todo } from './todo/todo';
import { Directives } from './directives/directives';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BindingExample,Ifelse, Loops, Signals, Twowaybinding, Todo, Directives],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('binding');
}
