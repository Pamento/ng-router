import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  query: string
  response

  constructor (private dataService: DataService) { }

  ngOnInit() {
  }

  go(){
    this.dataService.searchMovie(this.query).subscribe(
      data => { this.response = data },
      err => { this.response = err.message },
      () => console.log('done loading movie(s)')
    )
  }

}
