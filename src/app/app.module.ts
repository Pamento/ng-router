import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { StorageService } from "./services/storage.service";


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PersonListComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
