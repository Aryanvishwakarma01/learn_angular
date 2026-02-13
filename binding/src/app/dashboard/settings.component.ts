import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>Settings</h2>
    <nav>
      <a routerLink="general">General</a>
      <a routerLink="security">Security</a>
    </nav>

    <hr>
    <router-outlet></router-outlet>
  `
})
export class SetingsComponent {}
