import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { Page404Component } from '../components/page404/page404.component';
import { ContactComponent } from '../components/contact/contact.component';
import { OrderComponent } from '../components/order/order.component';
import { FoodComponent } from '../components/food/food.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { FormsModule } from "@angular/forms";

// M.D:
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule } from "@angular/material";


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        AboutComponent,
        Page404Component,
        ContactComponent,
        OrderComponent,
        FoodComponent,
        ThumbnailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        RoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }

//==================================================



