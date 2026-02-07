import { Component } from '@angular/core';
import { Child } from '../child/child';
import { Card } from '../card/card';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child, Card], // ✅ VERY IMPORTANT
  templateUrl: './parent.html'
})
export class ParentComponent {

  parentData = 'Old Data';

  changeData() {
    // this.parentData = 'Changed at ' + new Date().toLocaleTimeString();
    this.parentData = 'new data'
  }
}
