import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar'
import { Homepage} from './homepage/homepage'
import {Counterapp } from './counterapp/counterapp'
import {Mouseevent} from './mouseevent/mouseevent'
import {Forms} from './forms/forms'
import { ExampleComponent } from './example/example';
import { Card } from './card/card';
// import { Hooks } from './hooks/hooks';
import { ParentComponent } from './parent/parent';
import { Profile } from './profile/profile';
@Component({
  selector: 'app-root',
  imports: [ Navbar, Homepage, Counterapp,Mouseevent,Forms,ExampleComponent,ParentComponent, Card, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
