const API_URL = 'http://localhost:8080/';
const PRODUCT_URL = API_URL + "api/product/";
const CUSTOMER_URL = API_URL + "api/customer/";
const ORDER_URL = API_URL + "api/order/";
const SHOP_URL = API_URL + "api/shop/";

const ACTION_FIND = "find";
const GET_ACTION = "get";
const ADD_ACTION = "add";
export class Utils {
    public static getShopURL() {
        return SHOP_URL + GET_ACTION;
    }
    public static getOrderURL() {
        return ORDER_URL + GET_ACTION;
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
    public static findCustomerURL() {
        return CUSTOMER_URL + ACTION_FIND;
    }
}
