import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { CustomerModel } from '../../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { CustomerPipe } from '../../pipes/customer.pipe';
import { api } from '../../constants';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [SharedModule, CustomerPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  customers: CustomerModel[] = [];
  search: string="";
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.http.post<CustomerModel[]>(`${api}/Customers/GetAll`, {}).subscribe((res) => {
      this.customers = res;
      console.log(this.customers, "aaaaaa");
    });
  }
}
