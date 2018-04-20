import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from "../entities/person";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {

  @Input() name: string
  @Input() birth: Date

  @Output() change: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.change.emit(this.name)
  }

}
