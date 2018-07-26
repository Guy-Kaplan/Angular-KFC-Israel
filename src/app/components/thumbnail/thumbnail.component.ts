import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

    public counter: number = 0;

    @Input()
    public source: string; // Image source.

    @Input("side")   // side = outer name 
    public length: number; // Width/Height.  // length = inner name ONLY

    @Output()
    public enter: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public leave: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public click: EventEmitter<string> = new EventEmitter<string>();

    public mouseenter(): void{
        // Raising an event which gets the image source
        this.enter.emit(this.source);
        //alert("Entered");
    }

    public mouseleave(): void{
        // Raising an event which gets the image source
        this.leave.emit(this.source);
        //alert("Mouse Left");
    }

    public onclick(): void{
        // Raising an event which gets the image source
        //this.click.emit(this.source);
        if(this.counter%2===0){
            this.length = 160;
            this.counter++;
        }
        else{
            this.length = 150;
            this.counter++;
        }
        //alert("You clicked a pic");
    }

    public ondblclick(): void{
        alert("Order this meal! ===> Order");
    }
    
}

