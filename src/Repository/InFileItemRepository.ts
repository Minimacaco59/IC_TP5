import AgingItem from "../Items/AgingItem";
import ConjuredItem from "../Items/ConjuredItem";
import EventItem from "../Items/EventItem";
import GenericItem from "../Items/GenericItem";
import Item from "../Items/Item";
import ItemRepository from "./ItemRepository";
import LegendaryItem from "../Items/LegendaryItem";
import inventoryFile from "./itemRepositoryJson.json";
export default class InFileItemRepository implements ItemRepository{
    
    inventory:Item[] =  []
    constructor(){
        for(let i = 0; i < inventoryFile.length;i++){
            switch(inventoryFile[i].type){
                case "AgingItem":
                    this.inventory.push(new AgingItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));
                
                case "ConjuredItem":
                    this.inventory.push(new ConjuredItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));

                case "EvenItem":
                    this.inventory.push(new EventItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));

                case "GenericItem":
                    this.inventory.push(new GenericItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));

                case "LegendaryItem":
                    this.inventory.push(new LegendaryItem(inventoryFile[i].sellIn,inventoryFile[i].quality,inventoryFile[i].name,inventoryFile[i].value));
            }
        }
    }

    getInventory():Item[]{
        return this.inventory;
    }

    findItem(itemName:string,quality:number):Item{
        for(let i = 0; i < this.inventory.length; i++){
            if(this.inventory[i].itemName == itemName && this.inventory[i].quality == quality){
                return this.inventory[i]
            }
        }
        throw  new Error("Item not found");
        
    }

    saveInventory(items:Item[]):void{
        this.inventory = items;
    }

    


}