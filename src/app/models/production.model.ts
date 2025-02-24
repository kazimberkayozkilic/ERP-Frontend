import { DepotModel } from './depot.model';
import { ProductModel } from './product.model';

export class ProductionModel {
  id: string = '';
  productId: string = '';
  product: ProductModel = new ProductModel();
  depotId: DepotModel = new DepotModel();
  quantity: number = 1;
}
