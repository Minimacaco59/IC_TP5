import ConjuredItem from "./Items/ConjuredItem";
import GenericItem from "./Items/GenericItem";
import Item from "./Items/Item";
import ItemRepository from "./Repository/ItemRepository";
import ItemResponse from "./Boundary/ItemResponse";
import LegendaryItem from "./Items/LegendaryItem";
import RelicItem from "./Items/RelicItem";
import SellItemRequest from "./Boundary/SellItemRequest";
import ShopInputBoudary from "./Boundary/ShopInputBoundary";

export default class Shop implements ShopInputBoudary {
    
    repository:ItemRepository;
    balance: number = 0;
    // outputBoundary:ShopOutputBoundary;
    constructor(repository:ItemRepository){
        this.repository = repository;
        this.balance;
        // this.outputBoundary = new ConsoleView(this);
    }

    getInventory(){
        let items = this.repository.getInventory()
        let responses:ItemResponse[] = [];
        for(let i = 0; i < items.length;i++){
            if(items[i] instanceof GenericItem || items[i] instanceof LegendaryItem || items[i] instanceof ConjuredItem){
                responses.push(new ItemResponse(items[i].sellIn,items[i].quality,items[i].getArticleValue(),items[i].itemName,(items[i] as GenericItem).attack,(items[i] as GenericItem).defense));
            } else{
                responses.push(new ItemResponse(items[i].sellIn,items[i].quality,items[i].getArticleValue(),items[i].itemName));
            }
        }
        return responses;
    }

    getBalance(){
        return this.balance;
    }
    // getBalance():void{
    //     this.outputBoundary.displayBalance(this.balance);
    // }

    updateQuality():void{
        const items = this.repository.getInventory();
        for(let i = 0; i < items.length; i++){
            if(items[i] instanceof RelicItem){
                this.balance += 100;
            }
            items[i].updateQuality();
        }
        this.repository.saveInventory(items);
        
    }

    sellItem(itemToSell : SellItemRequest){
        let item : Item;
        item = this.repository.findItem(itemToSell.name,itemToSell.quality);
        this.balance += item.getArticleValue();
        console.log("sold ; ",item.getArticleValue())
        const items = this.repository.getInventory()
        items.splice(this.repository.getInventory().indexOf(item),1);
        this.repository.saveInventory(items)
        
    }

    itemExist(item:SellItemRequest):Item{
        return this.repository.findItem(item.name,item.quality);
        
    }

    setPrice(item:SellItemRequest,price:number){
        this.repository.findItem(item.name,item.quality).setPrice(price);
    }
}