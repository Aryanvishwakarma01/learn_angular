import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterActive',
  pure: false
})
export class FilterActivePipe implements PipeTransform {

transform(users: any[]) {
    console.log('Impure pipe executed');
    return users.filter(u => u.active);
  }
}
