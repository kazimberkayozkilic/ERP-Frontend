import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RecipePipe } from '../../pipes/recipe.pipe';
import { RecipeModel } from '../../models/recipe.model';
import { ProductModel } from '../../models/product.model';
import { HttpService } from '../../sevices/http.service';
import { SwalService } from '../../sevices/swal.service';
import { RecipeDetailModel } from '../../models/recipe-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [SharedModule, RecipePipe],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipes: RecipeModel[] = [];
  search: string = '';
  products: ProductModel[] = [];
  semiProducts: ProductModel[] = [];

  detail: RecipeDetailModel = new RecipeDetailModel();

  @ViewChild('createModalCloseBtn') createModalCloseBtn:
    | ElementRef<HTMLButtonElement>
    | undefined;
  createModel: RecipeModel = new RecipeModel();
  constructor(private http: HttpService, private swal: SwalService) {}

  ngOnInit(): void {
    this.getAllRecipes();
    this.getAllProducts();
  }

  getAllRecipes() {
    this.http.post<RecipeModel[]>('Recipes/GetAll', {}, (res) => {
      this.recipes = res;
    });
  }

  getAllProducts() {
    this.http.post<ProductModel[]>('Products/GetAll', {}, (res) => {
      this.products = res;
      this.semiProducts = res.filter((p) => p.type.value == 2);
    });
  }

  addDetail() {
    const product = this.products.find((p) => p.id == this.detail.productId);
    if (product) {
      this.detail.product = product;
    }

    this.createModel.recipeDetails.push(this.detail);

    this.detail = new RecipeDetailModel();
  }

  removeDetail(index: number) {
    this.createModel.recipeDetails.splice(index, 1);
  }

  create(form: NgForm) {
    if (form.valid) {
      this.http.post<string>('Recipes/Create', this.createModel, (res) => {
        this.swal.callToast(res);
        this.createModel = new RecipeModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAllRecipes();
      });
    }
  }
}
