import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed for ngModel
import { CommonModule } from '@angular/common'; // needed for ngIf, ngFor

@Component({
  selector: 'app-example',
  // standalone: true,         // 🔑 makes it standalone
  imports: [FormsModule, CommonModule],
  templateUrl: './example.html',
  styleUrls: ['./example.css'], // ✅ correct property
})
export class ExampleComponent {
  name = 'Angular Dev';
  today = new Date();
  logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  logoAlt = 'Angular logo';
  clicks = 0;

  age = 30;

  isPrimary = false;
  ariaLabel = 'demo-input';

  showList = true;
  items = ['Apple', 'Banana', 'Cherry'];

  // Method for button click
  toggleImage() {
    this.clicks++;
    this.logoUrl = this.logoUrl.includes('angular') 
      ? 'https://angular.io/assets/images/logos/angular/angular.svg'
      : 'https://angular.io/assets/images/logos/angular/angular.svg';
  }

  
}
