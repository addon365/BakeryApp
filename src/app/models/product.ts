export class Product {
    public id:number;
    public name:string;
    public quantity:number;
    public price:number;
    
    constructor(id:number,name:string,quantity:number,price:number){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }

    
}
