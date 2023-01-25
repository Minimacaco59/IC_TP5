import Item from "./Item";

export default class AgingItem extends Item{
    

    constructor(sellIn:number,quality:number,itemName:string,basePrice:number){
        super(sellIn,quality,itemName,basePrice);
    }

    updateQuality(): void {
        this.sellIn--;
        this.quality++;
        this.checkQuality();
    }
}