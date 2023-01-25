import Item from "./Item";

export default class LegendaryItem extends Item{
    
    attack:number;
    defense:number;
    constructor(sellIn:number,quality:number,itemName:string,basePrice:number,attack?:number, defense?:number){
        super(sellIn,quality,itemName,basePrice);
        if(attack !== undefined || attack == 0){
            this.attack = attack;
        } else{
            this.attack = 0
        }
        
        if(defense !== undefined || defense == 0){
            this.defense = defense;
        } else{
            this.defense = 0;
        }
    }

    updateQuality(): void {}


}