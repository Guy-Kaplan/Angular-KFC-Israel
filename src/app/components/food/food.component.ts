import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { FoodService } from '../../services/food.service';


@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

    public foods: Food[];

    constructor(private f: FoodService) { }

    ngOnInit() {
        this.foods = this.f.getFoods(); // Init foods
    }

}
//=========================================================
