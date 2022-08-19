import {Component, OnInit} from '@angular/core';
import {Dashboard} from "../../models/Dashboard";
import {List} from "../../models/List";
import {Task} from "../../models/Task";
import {State} from "../app.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  title = 'todoList';
  dashboards = [
    new Dashboard("first dashboard", []),
    new Dashboard("second dashboard", [new List([], 2, 1)]),
    new Dashboard("thirst dashboard", [
      new List([
        new Task(1, "First task", State.RUNNING, false, "this is my first task",),
        new Task(2, "Second task", State.FINISHED, false, "this is my Second task"),
        new Task(3, "Thirst task", State.CANCELED, false, "this is my Thirst task"),
        new Task(4, "Fourth task", State.RUNNING, false, "this is my Fourth task"),
      ], 3, 1)
    ]),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
