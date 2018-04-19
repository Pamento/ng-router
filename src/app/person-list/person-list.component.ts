import { Component, OnInit } from '@angular/core';
import { Person } from '../entities/person';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  list:Person[]

  formPerson = { name: '', birthdate: '', single: false};


  addPerson(): void {
    this.storageService.addPerson({
      id:4,
      name: this.formPerson.name,
      birthdate: new Date(this.formPerson.birthdate),
      single: this.formPerson.single
    });
  }

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.list = this.storageService.allPersons()
  }
}
