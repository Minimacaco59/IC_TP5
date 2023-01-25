import Item from "./Item";

export default class EventItem extends Item{
    

    constructor(sellIn:number,quality:number,itemName:string,basePrice:number){
        super(sellIn,quality,itemName,basePrice);
    }

    updateQuality(): void {
        this.sellIn--;

        if(this.sellIn > 10){
            this.quality++;
        } else if(this.sellIn > 5){
            this.quality+= 2;
        } else if(this.sellIn > 0){
            this.quality+= 3
        } else{
            this.quality = 0;
        }
        this.checkQuality();
    }


}