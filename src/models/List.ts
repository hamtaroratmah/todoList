import {Task} from "./Task";

export class List {

  private static _idStatic = 1 as number;
  private _id!: number;
  private _idDashboard?: number;
  private _tasks!: Task[];
  private _order?: number;

  constructor(tasks: Task[], idDashboard?: number, order?: number) {
    this._idDashboard = idDashboard != null ? idDashboard : -1;
    this._tasks = tasks;
    this._id = List._idStatic++;
    this._order = order;
  }

  static get idStatic(): number {
    return this._idStatic;
  }

  get id(): number {
    return this._id;
  }

  get idDashboard(): number {
    return <number>this._idDashboard;
  }

  set idDashboard(value: number) {
    this._idDashboard = value;
  }

  get tasks(): Task[] {
    return this._tasks;
  }

  get order(): number {
    return <number>this._order;
  }

  set order(value: number) {
    this._order = value;
  }
}
