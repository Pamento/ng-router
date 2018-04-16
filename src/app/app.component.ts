import { Component } from "@angular/core";



@Component({
    selector: 'app-root',
    template: `<p>{{maVariable}}</p>
                <app-first></app-first>`
})
export class AppComponent {
    maVariable:string = 'truc';
}