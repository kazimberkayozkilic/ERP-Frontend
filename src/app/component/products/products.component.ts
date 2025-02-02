import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { ProductPipe } from '../../pipes/product.pipe';
import { ProductModel } from '../../models/product.model';
import { HttpService } from '../../sevices/http.service';
import { SwalService } from '../../sevices/swal.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule, ProductPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];
  search: string="";


  constructor(private http: HttpService, private Swal: SwalService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
      this.http.post<ProductModel[]>('Products/GetAll', {}, (res) => {
        this.products = res;
      });
    }
}
