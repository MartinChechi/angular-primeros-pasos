
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>

        <button (click)="aumentarCounter()">+1</button>
        <button (click)="resetearCounter()">Reset</button>
        <button (click)="disminuirCounter()">-1</button>

    `
})

export class CounterComponent {
    public counter:number=10;
    constructor() { }

    aumentarCounter():void {
        this.counter +=1;
      }
      disminuirCounter():void{
        this.counter -=1;
      }
      resetearCounter():void{
        this.counter = 10;
      }
}