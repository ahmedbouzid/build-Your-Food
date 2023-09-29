import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card-service/card.service';
import { Card } from '../shared/models/card';
import { CardItem } from '../shared/models/card-item';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  card !: Card ;
  constructor(
    private cartService :CardService ,
    private foodService : FoodService
    ){}
  ngOnInit(): void {
    let foods = this.foodService.getAll() ;
    this.cartService.addToCard(foods[1]) ;
    this.cartService.addToCard(foods[5]) ;
    this.cartService.addToCard(foods[3]) ;
    this.setCard() ;


  }

  removeFromCard( cardItem : CardItem) {
    this.cartService.removeFrolCard(cardItem.food.id) ;
    this.setCard()
  }

  changeQte(cardItem : CardItem , qteInString : string) {
    const qte = parseInt(qteInString) ;
    this.cartService.changeQte(cardItem.food.id , qte)


    this.setCard()
  }
  setCard(){
    this.card = this.cartService.getCard()
  }

}
