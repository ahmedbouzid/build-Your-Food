import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:'' , component : HomeComponent} ,
  {path:'search/:searchTerm' , component : HomeComponent},
  {path:'tag/:tag' , component:HomeComponent},
  {path : 'food/:id' , component : FoodComponent} ,
  {path:'cardPage' , component : CartPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
