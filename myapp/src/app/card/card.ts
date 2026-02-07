
import {
  Component,
  ContentChild,
  AfterContentInit,
  ElementRef
} from '@angular/core';

@Component({
   selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements AfterContentInit {

  @ContentChild('actionBtn', { static: false })
  actionBtn?: ElementRef<HTMLButtonElement>;

  ngAfterContentInit() {
    if (!this.actionBtn) {
      console.warn('No projected actionBtn found');
      return;
    }

    this.actionBtn.nativeElement.style.background = 'green';
    this.actionBtn.nativeElement.style.color = 'white';
}
}
