import { Food } from "./food";

export class CardItem {
  constructor(food: Food) {
    this.food = food;
    this.qte = 1;
  }

  food: Food;
  qte: number;

  get price(): number {
    return this.food.price * this.qte;
  }
}
