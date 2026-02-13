import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>Dashboard</h2>
    <nav>
      <a routerLink="profile">Profile</a>
      <a routerLink="settings">Settings</a>
    </nav>

    <hr>
    <router-outlet></router-outlet>
  `
})
export class DashboardComponent {}
