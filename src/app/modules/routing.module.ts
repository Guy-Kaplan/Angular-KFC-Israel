import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { Page404Component } from '../components/page404/page404.component';
import { ContactComponent } from '../components/contact/contact.component';
import { OrderComponent } from '../components/order/order.component';
import { FoodComponent } from '../components/food/food.component';
// import { BooksComponent } from '../components/books/books.component';

const routes: Routes=[
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "food", component: FoodComponent},
    {path: "order", component: OrderComponent},
    {path: "contact", component: ContactComponent},
    // {path: "books", component: BooksComponent},
    {path: "", redirectTo:"/home", pathMatch:"full"},
    {path: "**", component: Page404Component},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class RoutingModule { }

