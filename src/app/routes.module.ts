import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { NestedComponent } from './nested/nested.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'nested', component: NestedComponent },
  { path: 'movie', component:  MovieComponent},
  { path: '**', component: NotFoundComponent },
  
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class RoutesModule {}