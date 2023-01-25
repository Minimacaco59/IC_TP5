import SellItemRequest from "./SellItemRequest";

export default interface ShopInputBoudary{
    updateQuality():void;
    sellItem(request : SellItemRequest):void;
}