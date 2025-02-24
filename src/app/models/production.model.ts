import { DepotModel } from './depot.model';
import { ProductModel } from './product.model';

export class ProductionModel {
  id: string = '';
  productId: string = '';
  product: ProductModel = new ProductModel();
  depot: DepotModel = new DepotModel();
  depotId: string ="";
  quantity: number = 1;
}
