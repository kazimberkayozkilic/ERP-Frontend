import { ProductModel } from "./product.model";

export class RecipeModel{
  id: string="";
  productId: string="";
  product: ProductModel = new ProductModel();
}
