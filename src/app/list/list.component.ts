import {Component, Input, OnInit} from '@angular/core';
import {List} from "../../models/List";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list!: List;

  constructor() {
  }

  ngOnInit(): void {
  }

}
