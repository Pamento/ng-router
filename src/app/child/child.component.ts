import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Person } from "../entities/person";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {

  @Input() name: String
  @Input() birth: Date

  constructor() { }

  ngOnInit() {
  }

}
