import ItemResponse from "./ItemResponse";

export default interface ShopOutputBoundary{
    displayInventory(inventory:ItemResponse[]);
    displayBalance(balance : number);
}