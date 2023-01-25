import Item from "../Items/Item";
import SellItemRequest from "../Boundary/SellItemRequest";
import Shop from "../Shop";

export default class ConsoleController{
    shop:Shop;
    constructor(shop : Shop){
        this.shop = shop;
    }

    updateQuality():void{
        this.shop.updateQuality();
        console.log("Quality of all item has been updated")
    }

    sellItem(name:string,quality:number):void{
        let itemRequest = new SellItemRequest(name,quality)
        this.shop.sellItem(itemRequest);
        
    }

    itemExist(item:SellItemRequest):Item{
        return this.shop.itemExist(item);
    }
}