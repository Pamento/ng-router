import { Component, OnInit } from '@angular/core';
import { Person } from "../entities/person";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  persons:Person[] = [
    {id: 1, name: 'ludovic', birthdate:new Date(), single:true},
    {id: 2, name: 'Pawel', birthdate:new Date(), single:true},
    {id: 3, name: 'Thierry', birthdate:new Date(), single:false},
  ];

  constructor() {
    
  }

  ngOnInit() {
  }

  onChange(event){
    console.log(event)
  }
}
