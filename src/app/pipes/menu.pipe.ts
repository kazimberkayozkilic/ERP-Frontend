import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menu',
  standalone: true
})
export class MenuPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
