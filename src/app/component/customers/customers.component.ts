import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { CustomerModel } from '../../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { CustomerPipe } from '../../pipes/customer.pipe';
import { api } from '../../constants';
import { NgForm } from '@angular/forms';
import { SwalService } from '../../sevices/swal.service';

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

  createModel: CustomerModel = new CustomerModel();
  updateModel: CustomerModel = new CustomerModel();
  constructor(private http: HttpClient, private swal: SwalService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.http
      .post<CustomerModel[]>(`${api}/Customers/GetAll`, {})
      .subscribe((res) => {
        this.customers = res;
        console.log(this.customers, 'aaaaaa');
      });
  }

  createCustomer(form: NgForm) {
    this.http.post<string>(
      `${api}/Customers/Create`,
      this.createCustomer)
      .subscribe((res) => {
        this.swal.callToast(res);
        this.createModel = new CustomerModel();
        this.createModalCloseBtn?.nativeElement.click();
      });
  }
}
