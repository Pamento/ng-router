import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { IndexComponent } from './index/index.component';
import { NestedComponent } from './nested/nested.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieComponent } from './movie/movie.component';

import { StorageService } from "./services/storage.service";
import { DataService } from './services/data.service';

import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PersonListComponent,
    ParentComponent,
    ChildComponent,
    IndexComponent,
    NestedComponent,
    NotFoundComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [
    StorageService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
