import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  handleLogin(){
    alert("Developer is a trainee and he is so lazy that's why he didn't linked login page yet")
  }
  handleSignUp(){
    alert("Developer is a trainee and he is so lazy that's why he didn't linked sign up page yet")
  }
}
