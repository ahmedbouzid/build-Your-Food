import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

    food !: Food ;

  constructor(

    private service : FoodService,
    private activatedRoute : ActivatedRoute
    ){
      this.activatedRoute.params.subscribe((params)=>{
        if (params['id'])
        this.food = this.service.getFoodById(params['id'])
      })
    }
  ngOnInit(): void {
    console.log(this.food);

  }

}
