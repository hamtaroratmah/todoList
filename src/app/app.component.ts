import {Component} from '@angular/core';
import {Dashboard} from "../models/Dashboard";
import {List} from "../models/List";
import {Task} from "../models/Task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}


export enum State {
  RUNNING = "en cours",
  FINISHED = "terminée",
  CANCELED = "annulée"
}
