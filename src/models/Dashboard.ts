import {List} from "./List";

export class Dashboard {

  private static _idStatic = 1 as number;
  private _id!: number;
  private _lists!: List[];
  private _title!: string;

  constructor(title: string, lists: List[]) {
    this._title = title;
    this._lists = lists;
    this._id = Dashboard._idStatic++;
  }

  static get idStatic(): number {
    return this._idStatic;
  }

  get id(): number {
    return this._id;
  }

  get lists(): List[] {
    return this._lists;
  }
  
  get title(): string {
    return this._title;
  }
}
