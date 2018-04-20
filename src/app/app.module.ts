import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { StorageService } from "./services/storage.service";
import { RoutesModule } from './routes.module';
import { IndexComponent } from './index/index.component';
import { NestedComponent } from './nested/nested.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PersonListComponent,
    ParentComponent,
    ChildComponent,
    IndexComponent,
    NestedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
