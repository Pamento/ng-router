import { Component, OnInit } from '@angular/core';
import { Person } from '../entities/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  list:Person[] = [
    {id: 1,name: 'ludovic',birthdate:new Date(),single:true},
    {id: 2,name: 'Pawel',birthdate:new Date(),single:true},
    {id: 3,name: 'Thierry',birthdate:new Date(),single:false},
  ];

  formPerson = { name: '', birthdate: '', single: false};


  addPerson(): void {
    this.list.push({
      id:4,
      name: this.formPerson.name,
      birthdate: new Date(this.formPerson.birthdate),
      single: this.formPerson.single
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
