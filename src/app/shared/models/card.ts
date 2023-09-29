import { CardItem } from "./card-item";

export class Card {

  items : CardItem[] =[];
  get total () : number {
    let total = 0 ;
    this.items.forEach(item =>{
          total +=  item.price   }) ;
          return total ;

    }
}
