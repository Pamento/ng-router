import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from "../entities/person";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {

  @Input() person: Person

  @Output() clickOnButton: EventEmitter<string> = new EventEmitter<string>()
  @Output() clickOnCheckbox: EventEmitter<Person> = new EventEmitter<Person>()

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clickOnButton.emit(this.person.name)
  }

  onCheckboxChange(){
    this.person.single = !this.person.single
    this.clickOnCheckbox.emit(this.person)
  }

}
