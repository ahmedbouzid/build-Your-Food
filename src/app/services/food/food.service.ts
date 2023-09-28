import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll() : Food [] {
    return [

      {
        id: 1,
        name: ' Spagetini',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy', 'Tun'],
        stars: 4.5,
        imageUrl: '/assets/img/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 1,
        name: 'Hamburger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 2,
        imageUrl: '/assets/img/food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 1,
        name: 'freet',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Mar'],
        stars: 3,
        imageUrl: '/assets/img/food-3.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Tun'],
        stars: 5,
        imageUrl: '/assets/img/food-4.jpg',
        tags: ['FastFood', 'Pizza' ],
      },
      {
        id: 1,
        name: 'Pizza ',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Fr'],
        stars: 4.5,
        imageUrl: '/assets/img/food-5.jpg',
        tags: ['FastFood'],
      },
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/img/food-6.jpg',
        tags: [ 'Pizza', 'Lunch'],
      },


    ]
  }

  getAllBytags(tag : string) : Food [] {


    return  tag === "All" ?
     this.getAll() :
     this.getAll().filter(food => food.tags?.includes(tag))

  }
}
