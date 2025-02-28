import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { CustomerModel } from '../../models/customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerPipe } from '../../pipes/customer.pipe';
import { api } from '../../constants';
import { NgForm } from '@angular/forms';
import { SwalService } from '../../sevices/swal.service';
import { HttpService } from '../../sevices/http.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [SharedModule, CustomerPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  customers: CustomerModel[] = [];
  search: string = '';

  @ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateModalCloseBtn") updateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  createModel: CustomerModel = new CustomerModel();
  updateModel: CustomerModel = new CustomerModel();
  constructor(private http: HttpService, private swal: SwalService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }


  getAllCustomers() {
    this.http.post<CustomerModel[]>(
      "Customers/GetAll",
      {},(res) => {
      this.customers = res;
      console.log(this.customers, 'aaaaaa');
    });
  }

  createCustomer(form: NgForm) {
    if(form.valid){
      this.http.post<string>("Customers/Create", this.createModel,(res)=> {
        this.swal.callToast(res);
        this.createModel= new CustomerModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAllCustomers();
      });
    }
  }

  deleteByIdCustomer(model: CustomerModel){
    this.swal.callSwal("Müşteri Sil", `${model.name}`,() => {
      this.http.post<string>("Customers/DeleteById", {id:model.id}, (res)=>{
        this.getAllCustomers();
        this.swal.callToast(res, "info");
      })
    });
  }

  getCustomer(model: CustomerModel){
    this.updateModel= {...model};
  }

  updateCustomer(form: NgForm) {
    if(form.valid){
      this.http.post<string>("Customers/Update", this.updateModel,(res)=> {
        this.swal.callToast(res, "info");
        this.updateModalCloseBtn?.nativeElement.click();
        this.getAllCustomers();
      });
    }
  }

}
