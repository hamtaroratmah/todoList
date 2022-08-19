import {State} from "../app/app.component";

export class Task {

  private static _idStatic = 1 as number;
  private _id!: number;
  private _idList?: number;
  private _subtasks?: Task[];
  private _order!: number;
  private _title!: string;
  private _description?: string;
  private _state!: State;
  private _isSubtask!: boolean;
  private _idParentTask?: number;


  constructor(order: number, title: string,
              state: State, isSubtask: boolean, description?: string, idList?: number, subtasks?: Task[], idParentTask?: number) {
    // if (!isSubtask && idParentTask != null && idParentTask > 1) throwError("Cannot have a parent task if it's not a subtask");
    this._idList = idList;
    this._subtasks = subtasks;
    this._isSubtask = isSubtask;
    this._order = order;
    this._title = title;
    this._description = description;
    this._state = state;
    this._idParentTask = idParentTask;
    this._id = Task._idStatic++;
  }

  static get idStatic(): number {
    return this._idStatic;
  }

  get id(): number {
    return this._id;
  }

  get idList(): number {
    return <number>this._idList;
  }

  get subtasks(): Task[] {
    if (this._subtasks == undefined) return [];
    return this._subtasks;
  }

  get order(): number {
    return this._order;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return <string>this._description;
  }

  get state(): State {
    return this._state;
  }

  get isSubtask(): boolean {
    return this._isSubtask;
  }

  get idParentTask(): number {
    return <number>this._idParentTask;
  }


  set idList(value: number) {
    this._idList = value;
  }

  set subtasks(value: Task[]) {
    this._subtasks = value;
  }

  set idParentTask(value: number) {
    this._idParentTask = value;
  }
}
