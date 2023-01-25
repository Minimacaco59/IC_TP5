import ItemResponse from "../Boundary/ItemResponse";
import Shop from "../Shop";
import ShopOutputBoundary from "../Boundary/ShopOutputBoundary";

export default class ConsoleView implements ShopOutputBoundary {

    shop: Shop
    constructor(shop: Shop) {
        this.shop = shop;
    }

    displayBalance(balance: number) {
        console.log("The shop balance is : ", balance);
    }

    displayInventory(inventory: ItemResponse[]) {
        for (let i = 0; i < inventory.length; i++) {
            let item = inventory[i];


            if (item.getAttack() && item.getDefense()) {
                console.log("\nItem n°" + i + " :\nName : " + item.name + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.value + "\nAttack :", item.attack + "\nDefense :", item.defense);

            } else if (item.getAttack()) {
                console.log("\nItem n°" + i + " :\nName : " + item.name + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.value + "\nAttack :", item.attack);

            } else if (item.getDefense()) {
                console.log("\nItem n°" + i + " :\nName : " + item.name + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.value + "\nDefense :", item.defense);
            } else {
                console.log("\nItem n°" + i + " :\nName : " + item.name + "\nQuality : " + item.quality + "\nSell in :" + item.sellIn + " days\nValue : " + item.value);
            }
        }


    }


}