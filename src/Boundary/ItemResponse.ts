export default class ItemResponse{
    sellIn:number;
    quality:number;
    value:number
    name:string;
    attack:number;
    defense:number;
    constructor(sellIn:number,quality:number,value:number,name:string,attack?:number,defense?:number){
        this.sellIn = sellIn;
        this.quality = quality;
        this.value = value;
        this.name = name;
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

    getAttack():boolean{
        return this.attack != 0;
    }
    getDefense():boolean{
        return this.defense != 0;
    }
}