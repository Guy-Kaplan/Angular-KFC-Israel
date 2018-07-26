import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    // Synchronic
    public getFoods(): Food[] {
        let foods = new Array<Food>();
        foods.push(new Food("meal1.jpeg", 80, "Bucket Meal"));
        foods.push(new Food("meal2.jpeg", 35, "2 Pieces Meal"));
        foods.push(new Food("meal3.jpg", 40, "3 Pieces Meal"));        
        return foods;
    }

    constructor() { }
}
//========================================================
