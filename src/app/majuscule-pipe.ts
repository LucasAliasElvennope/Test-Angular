import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majuscule'
})
export class MajusculePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value.toUpperCase();
    }
    return value;
  }
}
