import Item from "./Item";

export default class RelicItem extends Item{
    

    constructor(sellIn:number,quality:number,itemName:string,basePrice:number){
        super(sellIn,quality,itemName,basePrice);
        
    }

    updateQuality(): void {
    }
}