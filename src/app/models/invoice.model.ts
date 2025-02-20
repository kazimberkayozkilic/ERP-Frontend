import { CustomerModel } from "./customer.model";
import { InvoiceDetailModel } from "./invoice-detail.model";

export class InvoiceModel {
  id: string = '';
  oinvoiceNumber: number = 0;
  date: string = '';
  deliveryDate: string = '';
  customerId: string = '';
  customer: CustomerModel = new CustomerModel();
  type: InvoiceTypeEnum = new InvoiceTypeEnum();
  details: InvoiceDetailModel[] = [];
}

export class InvoiceTypeEnum{
  value: number =1;
  name: string ="";
}
