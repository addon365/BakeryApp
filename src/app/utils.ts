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
const GET_ORDERS="getOrders";
const ORDER_STATUS = "orderStatus"

export class Utils {
    
    public static SHOP_KEY = "Shop";
    public static PENDING = "Pending";
    public static DELIVERED = "Delivered";
    public static IN_PRODUCTION = "InProduction";
    public static IN_STOCK = "InStock";


    public static setOrderStatuses(orderStatuses: Array<OrderStatus>) {
        localStorage.setItem(ORDER_STATUS, JSON.stringify(orderStatuses));
    }
    public static getOrderStatuses(): Array<OrderStatus> {
        return JSON.parse(localStorage.getItem(ORDER_STATUS));
    }
    public static getOrderStatus(statusName: string): OrderStatus {
        let orderStatuses: Array<OrderStatus>;
        let orderStatus: OrderStatus = null;
        orderStatuses = Utils.getOrderStatuses();

        orderStatuses.forEach(element => {
            if (element.name == statusName) {
                orderStatus = element;
                return orderStatus;
            }
        });
        return orderStatus;
    }
    public static getStatusesURL() {
        return ORDER_URL + STATUS_ACTION;
    }
    public static getShopURL() {
        return SHOP_URL + GET_ACTION;
    }
    public static getOrderURL() {
        return ORDER_URL + GET_ORDERS;
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
    public static editProductURL() {
        return PRODUCT_URL + EDIT_ACTION;
    }
    public static addCustomerURL() {
        return CUSTOMER_URL + ADD_ACTION;
    }
    public static getCustomerURL() {
        return CUSTOMER_URL + GET_ACTION;
    }
    public static editCustomerURL() {
        return CUSTOMER_URL + EDIT_ACTION;
    }
    public static findCustomerURL() {
        return CUSTOMER_URL + ACTION_FIND;
    }
    public static getCurrentShop() {
        let shop: Shop = JSON.parse(localStorage.getItem(this.SHOP_KEY));
        return shop;
    }
}
