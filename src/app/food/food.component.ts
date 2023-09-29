import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../services/card-service/card.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

    food !: Food ;

  constructor(

    private service : FoodService,
    private activatedRoute : ActivatedRoute ,
    private cardService : CardService ,
    private router  : Router
    ){
      this.activatedRoute.params.subscribe((params)=>{
        if (params['id'])
        this.food = this.service.getFoodById(params['id'])
      })
    }
    addToCard(){
      this.cardService.addToCard(this.food) ;
      this.router.navigate(['/cardPage'])
    }
  ngOnInit(): void {
    console.log(this.food);

  }


}
