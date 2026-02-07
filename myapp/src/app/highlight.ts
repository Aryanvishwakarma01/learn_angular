import { Directive } from '@angular/core';
import { ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  constructor(private el: ElementRef<HTMLElement>) { }
  @Input('appHighlight') set color(c: string) {
    this.el.nativeElement.style.backgroundColor = c || 'yellow';
  }
}
