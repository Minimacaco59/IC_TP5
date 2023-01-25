import AgingItem from "../src/Items/AgingItem";
import ConjuredItem from "../src/Items/ConjuredItem";
import EventItem from "../src/Items/EventItem";
import GenericItem from "../src/Items/GenericItem";
import Item from "../src/Items/Item";
import ItemRepository from "../src/Repository/ItemRepository";
import LegendaryItem from "../src/Items/LegendaryItem";
import RelicItem from "../src/Items/RelicItem";
 


export default class InMemoryItemRepository implements ItemRepository{
    
    inventory:Item[] =  [
        new GenericItem(10,10,"genericItem",100,0,40),
        new GenericItem(0,10,"genericItem",100,30),
        new LegendaryItem(10,80,"Sulfuras",100,80,30),
        new GenericItem(10,0,"genericItem",100,8),
        new AgingItem(10,10,"Aged Brie",100),
        new AgingItem(10,50,"Aged Brie",100),
        new EventItem(20,10,"Backstage passes",100),
        new EventItem(7,10,"Backstage passes",100),
        new EventItem(2,10,"Backstage passes",100),
        new EventItem(0,10,"Backstage passes",100),
        new ConjuredItem(10,10,"Conjured item",100,30,20),
        new ConjuredItem(0,10,"Conjured item",100),
        new RelicItem(10,10,"gold bar",10)
    ]
    

    getInventory():Item[]{
        return this.inventory;
    }

    findItem(itemName:string,quality:number):Item{
        for(let i = 0; i < this.inventory.length; i++){
            if(this.inventory[i].itemName == itemName && this.inventory[i].quality == quality){
                if(this.inventory[i] instanceof RelicItem){
                    throw  new Error("Item not found");
                }
                return this.inventory[i]
            }
        }
        throw  new Error("Item not found");
        
    }

    saveInventory(items:Item[]):void{
        this.inventory = items;
    }

    


}