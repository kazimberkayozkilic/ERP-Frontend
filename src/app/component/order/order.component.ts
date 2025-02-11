import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { OrderPipe } from '../../pipes/order.pipe';
import { RouterLink } from '@angular/router';
import { OrderModel } from '../../models/order.model';
import { CustomerModel } from '../../models/customer.model';
import { ProductModel } from '../../models/product.model';
import { HttpService } from '../../sevices/http.service';
import { SwalService } from '../../sevices/swal.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [SharedModule, OrderPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  orders: OrderModel[] = [];
  customers: CustomerModel[] = [];
  products: ProductModel[] = [];

  search: string = '';
  constructor(
    private http: HttpService,
    private swal: SwalService,
    private date: DatePipe
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.getAllProducts();
    this.getAllCustomers();
  }

  getAll() {
    this.http.post<OrderModel[]>('Orders/GetAll', {}, (res) => {
      this.orders = res;
    });
  }

  getAllProducts() {
    this.http.post<ProductModel[]>('Products/GetAll', {}, (res) => {
      this.products = res;
    });
  }

  getAllCustomers() {
    this.http.post<CustomerModel[]>('Customers/GetAll', {}, (res) => {
      this.customers = res;
    });
  }
}
