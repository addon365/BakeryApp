import { OrderStatus } from "./models/order-status";
import { Shop } from "./models/shop";
import { SalesOrderService } from "./services/sales-order.service";

const API_URL = 'http://localhost:8080/BakeryService/';
const PRODUCT_URL = API_URL + "api/product/";
const CUSTOMER_URL = API_URL + "api/customer/";
const ORDER_URL = API_URL + "api/order/";
const SHOP_URL = API_URL + "api/shop/";

const ACTION_SALES_REPORT = "getSalesReport";
const ACTION_FIND = "find";
const GET_ACTION = "get";
const ADD_ACTION = "add";
const STATUS_ACTION = "getStatuses";
const EDIT_ACTION = "edit";



export class Utils {
    public static orderStatuses: Array<OrderStatus> = null;
    public static SHOP_KEY = "Shop";
    public static PENDING = "Pending";
    public static DELIVERED = "Delivered";
    public static IN_PRODUCTION = "InProduction";
    public static IN_STOCK = "InStock";


    public static getOrderStatuses(): Array<OrderStatus> {
        return this.orderStatuses;
    }
    public static getOrderStatus(statusName: string): OrderStatus {
        this.orderStatuses.forEach(element => {
            if (element.name == statusName)
                return element;
        });
        return null;
    }
    public static getStatusesURL() {
        return ORDER_URL + STATUS_ACTION;
    }
    public static getShopURL() {
        return SHOP_URL + GET_ACTION;
    }
    public static getOrderURL() {
        return ORDER_URL + GET_ACTION;
    }
    public static editOrderURL() {
        return ORDER_URL + EDIT_ACTION;
    }
    public static getSalesURL() {
        return ORDER_URL + ACTION_SALES_REPORT;
    }
    public static addOrderURL() {
        return ORDER_URL + ADD_ACTION;
    }
    public static getProductURL() {
        return PRODUCT_URL + GET_ACTION;
    }
    public static addProductURL() {
        return PRODUCT_URL + ADD_ACTION;
    }
    public static addCustomerURL() {
        return CUSTOMER_URL + ADD_ACTION;
    }
    public static getCustomerURL() {
        return CUSTOMER_URL + GET_ACTION;
    }
    public static findCustomerURL() {
        return CUSTOMER_URL + ACTION_FIND;
    }
    public static getCurrentShop() {
        let shop: Shop = JSON.parse(localStorage.getItem(this.SHOP_KEY));
        return shop;
    }
}
