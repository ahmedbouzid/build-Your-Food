import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import { CardItem } from 'src/app/shared/models/card-item';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CardService {

 private CARD : Card = new Card() ;


  addToCard(food : Food)  {
    let cardItem = this.CARD.items.find(item => item.food.id == food.id) ;
    if (cardItem) {
      this.changeQte(food.id , cardItem.qte + 1)

    }
    this.CARD.items.push(new CardItem(food))
  }
  removeFrolCard(foodId : number) {
      this.CARD.items = this.CARD.items.filter(item => item.food.id != foodId)
  }
  changeQte(foodId : number , qte:number){
    let cardItem = this.CARD.items.find(item => item.food.id === foodId) ;
    if (!cardItem) return ;
    cardItem.qte = qte ;
  }
  getCard() : Card {
    return this.CARD
  }
}
