import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeWords',
})
export class MaskEmailPipe implements PipeTransform {

  transform(value: string): string {
    console.log('Pure pipe executed');
    return value
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }



}
