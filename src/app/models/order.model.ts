import { CustomerModel } from "./customer.model";
import { OrderDetailModel } from "./order-detail.model";

export class OrderModel{
  id : string ="";
  orderNumber: number =0;
  orderNumberYear: number =0;
  date: string ="";
  number: string ="";
  deliveryDate: string="";
  customerId: string="";
  customer: CustomerModel= new CustomerModel();
  details: OrderDetailModel[] = [];
}
