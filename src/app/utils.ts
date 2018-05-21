import { OrderStatus } from "./models/order-status";
import { Shop } from "./models/shop";

const API_URL = 'http://localhost:8080/';
const PRODUCT_URL = API_URL + "api/product/";
const CUSTOMER_URL = API_URL + "api/customer/";
const ORDER_URL = API_URL + "api/order/";
const SHOP_URL = API_URL + "api/shop/";

const ACTION_FIND = "find";
const GET_ACTION = "get";
const ADD_ACTION = "add";
const STATUS_ACTION = "getStatuses";
const EDIT_ACTION = "edit";



export class Utils {
    public static orderStatuses: Array<OrderStatus> = null;
    public static SHOP_KEY = "Shop";
    public static PENDING = 4;
    public static DELIVERED = 1;
    public static IN_PRODUCTION = 2;

    public static IN_STOCK = 3;
    private static initOrderStatuses() {
        if (this.orderStatuses == null) {
            Utils.orderStatuses = new Array<OrderStatus>();
            Utils.orderStatuses.push(new OrderStatus(1, "Delivered", "D"));
            Utils.orderStatuses.push(new OrderStatus(2, "InProduction", "IP"));
            Utils.orderStatuses.push(new OrderStatus(3, "InStock", "IS"));
            Utils.orderStatuses.push(new OrderStatus(4, "Pending", "P"));
        }
    }
    public static getOrderStatuses(): Array<OrderStatus> {
        Utils.initOrderStatuses();
        return this.orderStatuses;
    }
    public static getOrderStatus(statusId: number): OrderStatus {
        Utils.initOrderStatuses();
        return this.orderStatuses[statusId];
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
