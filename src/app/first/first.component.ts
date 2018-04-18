import { Component } from "@angular/core";


@Component({
    selector:'app-first',
    templateUrl:'./first.component.html'
})
export class FirstComponent {
    idP:string = 'monId';
    maVariable:string = 'bloup';
    showSection:boolean = true;
    varInput:string;
    tableau:string[] = ['ga', 'zo', 'bu', 'meu'];

    methode():void {
        console.log('bloup');
        this.maVariable = 'blip';

        this.showSection = !this.showSection;
    }
    add():void {
        this.tableau.push(this.varInput);
        this.varInput = '';
    }
}