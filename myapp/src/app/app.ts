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
import { Product } from './product/product';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,RouterLink, RouterLinkActive, Navbar, Homepage, Counterapp,Mouseevent,Forms,ExampleComponent,ParentComponent, Card, Profile, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
