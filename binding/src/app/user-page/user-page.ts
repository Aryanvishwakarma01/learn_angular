import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  imports: [],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {
  userId: string | null = null;
  userName: string | null = null;
  constructor(private route: ActivatedRoute){
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log("User ID:", this.userId);
      this.userName = params.get('name');
    })
  }
}
