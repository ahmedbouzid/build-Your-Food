import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {path:'' , component : HomeComponent} ,
  {path:'search/:searchTerm' , component : HomeComponent},
  {path:'tag/:tag' , component:HomeComponent},
  {path : 'food/:id' , component : FoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
