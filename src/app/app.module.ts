import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodRecipeListComponent } from './food-recipe-list/food-recipe-list.component';
import { HomeComponent } from './home/home.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FoodDescComponent } from './food-desc/food-desc.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoodRecipeListComponent,
    HomeComponent,
    RecipeCardComponent,
    FoodDescComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
