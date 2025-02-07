import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { HttpService } from '../../sevices/http.service';
import { RecipeDetailModel } from '../../models/recipe-detail.model';
import { RecipeModel } from '../../models/recipe.model';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeModel = new RecipeModel();
  recipeId: string = '';
  products: ProductModel[] = [];
  isUpdateFormActive: boolean = false;
  search:string = "";
  createModel:RecipeDetailModel = new RecipeDetailModel();
  updateModel:RecipeDetailModel = new RecipeDetailModel();
  constructor(private http: HttpService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getRecipeById() {
    this.http.post<RecipeModel>(
      'RecipeDetails/GetRecipeByIdWithDetails',
      { recipeId: this.recipeId },
      (res) => {
        this.recipe = res;
      }
    );
  }
  getAllProducts(){
    this.http.post<ProductModel[]>("Products/GetAll",{},(res)=> {
      this.products = res.filter(p=> p.type.value == 2);
    });
  }
}
