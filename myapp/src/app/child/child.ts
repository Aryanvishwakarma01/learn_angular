import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  templateUrl: './child.html'
})
export class Child implements OnChanges {

  @Input() data!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges fired');
    console.log('Previous value:', changes['data']?.previousValue);
    console.log('Current value:', changes['data']?.currentValue);
  }
}
