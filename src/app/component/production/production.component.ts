import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { HttpService } from '../../sevices/http.service';
import { SwalService } from '../../sevices/swal.service';
import { DepotModel } from '../../models/depot.model';
import { ProductModel } from '../../models/product.model';
import { ProductionModel } from '../../models/production.model';
import { ProductionPipe } from '../../pipes/production.pipe';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [SharedModule, ProductionPipe],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent {
  productions: ProductionModel[] = [];
  products: ProductModel[] = [];
  depots: DepotModel[] = [];

  search:string = "";

  @ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  createModel:ProductionModel = new ProductionModel();
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

  deleteById(model: ProductionModel){
    this.swal.callSwal("Üretimi Sil?",`${model.product.name} üretimini silmek istiyor musunuz?`,()=> {
      this.http.post<string>("Productions/DeleteById",{id: model.id},(res)=> {
        this.getAll();
        this.swal.callToast(res,"info");
      });
    })
  }

  create(form: NgForm){
    if(form.valid){
      this.http.post<string>("Productions/Create",this.createModel,(res)=> {
        this.swal.callToast(res);
        this.createModel = new ProductionModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }
}
