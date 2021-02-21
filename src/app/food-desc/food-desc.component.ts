import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-food-desc',
  templateUrl: './food-desc.component.html',
  styleUrls: ['./food-desc.component.css'],
})
export class FoodDescComponent implements OnInit {
  productObj: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataservice: RecipeDataService
  ) {}

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params.uri);

    this.dataservice
      .getProductByUri(this.activatedRoute.snapshot.params.uri)
      .subscribe((data) => {
        this.productObj = data;
        console.log(this.productObj);
      });
  }
}
