import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BindingExample} from './binding-example/binding-example';
import { Ifelse } from './ifelse/ifelse';
import { Loops } from './loops/loops';
import { Signals } from './signals/signals';
import { Twowaybinding } from './twowaybinding/twowaybinding';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BindingExample,Ifelse, Loops, Signals, Twowaybinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('binding');
}
