import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { InvoiceModel } from '../../models/invoice.model';
import { CustomerModel } from '../../models/customer.model';
import { HttpService } from '../../sevices/http.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SwalService } from '../../sevices/swal.service';
import { DepotModel } from '../../models/depot.model';
import { ActivatedRoute } from '@angular/router';
import { InvoicePipe } from '../../pipes/invoice.pipe';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
invoices: InvoiceModel[] = [];
customer: CustomerModel[] = [];
depots: DepotModel[]=[];
search: string="";
type: number = 1;
typeName: string = "Alış";
constructor(private http: HttpService, private swal: SwalService, private activated: ActivatedRoute) {
  this.activated.params.subscribe(res=> {
    this.type = res["type"] == "purchase" ? 1 : 2;
    this.typeName = this.type == 1 ? "Alış" : "Satış";

    this.getAll();
  })

}

getAll(){
  this.http.post<InvoiceModel[]>("Invoices/GetAll",{type: this.type},(res)=> {
    this.invoices = res;
  });
}


}
