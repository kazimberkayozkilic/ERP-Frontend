import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RecipePipe } from '../../pipes/recipe.pipe';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

}
