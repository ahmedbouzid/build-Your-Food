import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll() : string [] {
    return [
      '/assets/img/food-1.jpg',
      '/assets/img/food-2.jpg' ,
      '/assets/img/food-3.jpg' ,
      '/assets/img/food-4.jpg' ,
      '/assets/img/food-5.jpg' ,
      '/assets/img/food-6.jpg' ,

    ]
  }
}
