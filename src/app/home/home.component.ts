import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods :string [] = [] ;

  constructor(private service : FoodService) {}

  ngOnInit(): void {

    this.foods = this.service.getAll() ;


  }


}
