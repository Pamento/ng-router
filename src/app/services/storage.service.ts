import { Injectable } from '@angular/core';
import { Person } from '../entities/person';

@Injectable()
export class StorageService {

  persons: Person[]

  constructor() {
    if(this.read('persons') === null){
      this.persons = []
      this.save()
    } else {
      this.persons = this.read('persons')
    }
  }
  
  allPersons():Array<Person>{
    return this.persons
  }

  addPerson(person:Person):Array<Person> {
    this.persons.push(person)
    this.save()

    return this.persons
  }

  private save():void {
    let json = JSON.stringify(this.persons)

    localStorage.setItem('persons', json)
  }

  private read(itemName: string) {
    let json = localStorage.getItem(itemName)
    return JSON.parse(json)
  }
}
