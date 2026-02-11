import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName:string | null =''

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(){
    this.userName = this.route.snapshot.paramMap.get('name');
    console.log(name);
  }

}
