import { Customer } from "./customer";
import { Shop } from "./shop";
import { OrderItem } from "./order-item";

export class SalesOrder {
    constructor(
        public id: number,
        public customer: Customer,
        public advance: number,
        public total: number,
        public orderedDate: Date,
        public expectedDate: Date,
        public orderedTime: string,
        public expectedTime: string,
        public shop: Shop,
        public orderItems: Array<OrderItem>
    ) { }
}
