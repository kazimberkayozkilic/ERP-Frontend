import { CustomerModel } from "./customer.model";

export class OrderModel{
  id : string ="";
  orderNumber: number =0;
  orderNumberYear: number =0;
  date: string ="";
  deliveryDate: string="";
  customerId: string="";
  customer: CustomerModel= new CustomerModel();
}
