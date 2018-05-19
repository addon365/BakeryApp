import { Product } from "./product";
import { SalesOrder } from "./sales-order";

export class OrderItem {
    constructor(
        public id: number,
        public product: Product,
        public price: number,
        public quantity: number,
        public order: SalesOrder
    ) { }
}
