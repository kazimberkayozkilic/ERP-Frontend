import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RecipePipe } from '../../pipes/recipe.pipe';
import { RecipeModel } from '../../models/recipe.model';
import { ProductModel } from '../../models/product.model';
import { HttpService } from '../../sevices/http.service';
import { SwalService } from '../../sevices/swal.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [SharedModule, RecipePipe],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
recipes: RecipeModel[] =[];
search: string ="";
products: ProductModel[] = [];

constructor(private http: HttpService, private swal: SwalService){}


  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.http.post<RecipeModel[]>('Recipes/GetAll', {}, (res) => {
      this.recipes = res;
    });
  }
}
