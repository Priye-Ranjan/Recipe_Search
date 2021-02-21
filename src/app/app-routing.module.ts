import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDescComponent } from './food-desc/food-desc.component';
import { FoodRecipeListComponent } from './food-recipe-list/food-recipe-list.component';
import { HomeComponent } from './home/home.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'food-recipe-list',
    component: FoodRecipeListComponent,
  },
  {
    path: 'food-recipe-list/:query',
    component: FoodRecipeListComponent,
  },
  {
    path: 'recipe-card',
    component: RecipeCardComponent,
  },
  {
    path: 'food-desc/:uri',
    component: FoodDescComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
