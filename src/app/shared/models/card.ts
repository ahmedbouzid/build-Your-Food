import { CartItem } from "./card-item";

export class Card {

  items : CartItem[] =[];
  get total () : number {
    let total = 0 ;
    this.items.forEach(item =>{
          total +=  item.price   }) ;
          return total ;

    }
}
