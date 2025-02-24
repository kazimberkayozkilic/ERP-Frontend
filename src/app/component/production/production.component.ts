import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { HttpService } from '../../sevices/http.service';
import { SwalService } from '../../sevices/swal.service';
import { DepotModel } from '../../models/depot.model';
import { ProductModel } from '../../models/product.model';
import { ProductionModel } from '../../models/production.model';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent {
  productions: ProductionModel[] = [];
  products: ProductModel[] = [];
  depots: DepotModel[] = [];

  search:string = "";
  constructor(
    private http: HttpService,
    private swal: SwalService
  ){}

  ngOnInit(): void {
    this.getAll();
    this.getAllProducts();
    this.getAllDepots();
  }

  getAll(){
    this.http.post<ProductionModel[]>("Productions/GetAll",{},(res)=> {
      this.productions = res;
    });
  }

  getAllProducts(){
    this.http.post<ProductModel[]>("Products/GetAll",{},(res)=> {
      this.products = res;
    });
  }

  getAllDepots(){
    this.http.post<DepotModel[]>("Depots/GetAll",{},(res)=> {
      this.depots = res;
    });
  }

}
