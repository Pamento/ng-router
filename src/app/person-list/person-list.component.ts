import { Component, OnInit } from '@angular/core';
import { Person } from '../entities/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  list:Person[] = [
    {id: 1,name: 'ludovic',birthdate:new Date('2015-10-09'),single:true},
    {id: 2,name: 'Pawel',birthdate:new Date(),single:true},
    {id: 3,name: 'Thierry',birthdate:new Date(),single:false},
  ];


  constructor() { }

  ngOnInit() {
  }

}
