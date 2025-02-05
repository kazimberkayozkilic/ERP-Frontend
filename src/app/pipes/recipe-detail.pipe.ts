import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeDetail',
  standalone: true
})
export class RecipeDetailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
