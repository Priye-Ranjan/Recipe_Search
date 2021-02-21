import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-food-recipe-list',
  templateUrl: './food-recipe-list.component.html',
  styleUrls: ['./food-recipe-list.component.css'],
})
export class FoodRecipeListComponent implements OnInit {
  dataListing: any;
  constructor(
    private dataservice: RecipeDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Food recipe works');
    this.dataservice
      .getProductByName(this.route.snapshot.params.query)
      .subscribe((data) => {
        this.dataListing = data.hits; //Added data.hits
        console.log(this.dataListing);
      });
  }
}
