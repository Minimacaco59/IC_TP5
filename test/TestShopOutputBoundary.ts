import ItemResponse from "../src/Boundary/ItemResponse";
import ShopOutputBoundary from "../src/Boundary/ShopOutputBoundary";

export default class TestShopOutputBoundary implements ShopOutputBoundary{
    public hasReceivedItems: boolean = false;
    public hasReceivedBalance : boolean = false;

    public displayInventory(inventory: ItemResponse[]) {
        this.hasReceivedItems = inventory != null;
    }

    public displayBalance(balance: number) {
        this.hasReceivedBalance = balance != null && balance != NaN;
    }
    
}