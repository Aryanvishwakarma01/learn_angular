import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskEmailPipe } from '../mask-email-pipe';
import { FilterActivePipe } from '../filter-active-pipe';
@Component({
  selector: 'app-profile',
  imports: [CommonModule, MaskEmailPipe, FilterActivePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  // userName='aryan'
  // joinedDate = new Date(2022,4,15)
  email = "aryanvish86@gmail.com"

  name = 'angular standalone pipes'

  changeName(){
  this.name = 'pure pipe executed again'
  }

mutateNames(){
  this.name = this.name;
}

users = [
    { name: 'Amol', active: true },
    { name: 'John', active: false },
    { name: 'Priya', active: true }
  ];

  toggleFirst() {
    // mutating object → impure pipe still runs
    this.users[0].active = !this.users[0].active;
  }
}

