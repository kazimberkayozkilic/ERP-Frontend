import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { ProductPipe } from '../../pipes/product.pipe';
import { ProductModel, ProductTypeEnum, ProductTypes } from '../../models/product.model';
import { HttpService } from '../../sevices/http.service';
import { SwalService } from '../../sevices/swal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, ProductPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];
  search: string = '';
  types: ProductTypeEnum[] = ProductTypes;

  @ViewChild('createModalCloseBtn') createModalCloseBtn:
    | ElementRef<HTMLButtonElement>
    | undefined;

  createModel: ProductModel = new ProductModel();

  constructor(private http: HttpService, private swal: SwalService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.http.post<ProductModel[]>('Products/GetAll', {}, (res) => {
      this.products = res;
    });
  }

  deleteByIdProduct(model: ProductModel) {
      this.swal.callSwal('Ürün Sil', `${model.name}`, () => {
        this.http.post<string>('Products/DeleteById', { id: model.id }, (res) => {
          this.getAllProducts();
          this.swal.callToast(res, 'info');
        });
      });
    }

  createProduct(form: NgForm) {
      if (form.valid) {
        this.http.post<string>('Products/Create', this.createModel, (res) => {
          this.swal.callToast(res);
          this.createModel = new ProductModel();
          this.createModalCloseBtn?.nativeElement.click();
          this.getAllProducts();
        });
      }
    }
}
