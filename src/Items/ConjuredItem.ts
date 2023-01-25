import Item from "./Item";

export default class ConjuredItem extends Item{
    
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

    updateQuality(): void {
        this.sellIn--;
        if(this.sellIn < 0){
            this.quality -= 4;
        }
        else{
            this.quality -= 2;
        }

        this.checkQuality();
    }


}