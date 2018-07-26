import { Component } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{

    public order: Order = new Order();

    public send(): void{
        let comment: string = "";
        if(this.order.comments!=undefined){
            comment=this.order.comments;
        }
        alert(`
        City: ${this.order.city}
        Meal Type: ${this.order.mealType}
        Number of Meals: ${this.order.numOfMeals}
        Side: ${this.order.side}
        Drink: ${this.order.drink}
        Comments: ${comment}
        Total Price: ₪${this.getPrice()}
        `);
    }

    public getPrice(): number{
        let price: number = 0;
        let numOfMeals: number = this.order.numOfMeals;
        let mealPrice: number = 0;
        if(this.order.mealType==="Bucket Meal"){
            mealPrice = 80;
        }
        else if(this.order.mealType==="2 Pieces Meal"){
            mealPrice = 35;
        }
        else if(this.order.mealType==="3 Pieces Meal"){
            mealPrice = 40;
        }
        price = numOfMeals * mealPrice;
        return price;
    }

}
