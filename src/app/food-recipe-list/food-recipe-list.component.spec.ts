import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecipeListComponent } from './food-recipe-list.component';

describe('FoodRecipeListComponent', () => {
  let component: FoodRecipeListComponent;
  let fixture: ComponentFixture<FoodRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRecipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
