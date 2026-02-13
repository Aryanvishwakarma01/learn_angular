import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile {

  userName: string | null = null;
  tab: string | null = null;
  mode: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    // Route parameter (Ayush)
    this.route.paramMap.subscribe(params => {
      this.userName = params.get('name');
      console.log("Name:", this.userName);
    });

    // Query parameters
    this.route.queryParamMap.subscribe(params => {
      this.tab = params.get('tab');
      this.mode = params.get('mode');
      console.log("Tab:", this.tab);
      console.log("Mode:", this.mode);
    });
  }
}
