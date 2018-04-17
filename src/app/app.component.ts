import { Component } from "@angular/core";



@Component({
    selector: 'app-root',
    template: `<p>{{maVariable}}</p>
                <app-person-list></app-person-list>`
})
export class AppComponent {
    maVariable:string = 'truc';
}