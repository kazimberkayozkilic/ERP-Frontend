import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { OrderPipe } from '../../pipes/order.pipe';
import { RouterLink } from '@angular/router';
import { OrderModel } from '../../models/order.model';
import { CustomerModel } from '../../models/customer.model';
import { ProductModel } from '../../models/product.model';
import { HttpService } from '../../sevices/http.service';
import { SwalService } from '../../sevices/swal.service';
import { DatePipe } from '@angular/common';
import { OrderDetailModel } from '../../models/order-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [SharedModule, OrderPipe],
  providers: [DatePipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  orders: OrderModel[] = [];
  customers: CustomerModel[] = [];
  products: ProductModel[] = [];
  createDetail: OrderDetailModel = new OrderDetailModel();
  updateDetail: OrderDetailModel = new OrderDetailModel();

  search: string = '';

  @ViewChild('createModalCloseBtn') createModalCloseBtn:
    | ElementRef<HTMLButtonElement>
    | undefined;
  @ViewChild('updateModalCloseBtn') updateModalCloseBtn:
    | ElementRef<HTMLButtonElement>
    | undefined;
  createModel: OrderModel = new OrderModel();
  updateModel:OrderModel = new OrderModel();
  constructor(
    private http: HttpService,
    private swal: SwalService,
    private date: DatePipe
  ) {
    this.createModel.date = this.date.transform(new Date(), 'yyyy-MM-dd') ?? '';
    this.createModel.deliveryDate =
      this.date.transform(new Date(), 'yyyy-MM-dd') ?? '';
  }

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

  addDetail() {
    const product = this.products.find(
      (p) => p.id == this.createDetail.productId
    );
    if (product) {
      this.createDetail.product = product;
    }

    this.createModel.details.push(this.createDetail);
    this.createDetail = new OrderDetailModel();
  }

  create(form: NgForm) {
    if (form.valid) {
      this.http.post<string>('Orders/Create', this.createModel, (res) => {
        this.swal.callToast(res);
        this.createModel = new OrderModel();
        this.createModel.date =
          this.date.transform(new Date(), 'yyyy-MM-dd') ?? '';
        this.createModel.deliveryDate =
          this.date.transform(new Date(), 'yyyy-MM-dd') ?? '';

        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  removeDetail(index: number) {
    this.createModel.details.splice(index, 1);
  }

  deleteById(model: OrderModel) {
    this.swal.callSwal(
      'Siparişi Sil?',
      `${model.customer.name} - ${model.number} numaralı siparişi silmek istiyor musunuz?`,
      () => {
        this.http.post<string>('Orders/DeleteById', { id: model.id }, (res) => {
          this.getAll();
          this.swal.callToast(res, 'info');
        });
      }
    );
  }

  get(model: OrderModel){
    this.updateModel = {...model};
  }
}
