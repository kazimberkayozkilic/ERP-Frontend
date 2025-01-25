import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { CustomerModel } from '../../models/customer.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  customers: CustomerModel[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.http.post<CustomerModel[]>("Customers/GetAll", {}).subscribe((res) => {
      this.customers = res;
    });
  }
}
