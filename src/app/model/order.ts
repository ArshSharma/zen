import { Client } from "./client";
import { OrderDetails } from "./orderDetails";

export class Order {
    orderId:number;
    client: Client;
    appointmentDate: Date;
    orderDate: Date;
    total: number;
    orderDetails: OrderDetails[];

    

}