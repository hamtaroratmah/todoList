import {Component, Input, OnInit} from '@angular/core';
import {Dashboard} from "../../models/Dashboard";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() dashboard!: Dashboard;

  constructor() { }

  ngOnInit(): void {
  }

}
