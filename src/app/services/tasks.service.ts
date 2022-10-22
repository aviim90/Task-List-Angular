import { Injectable } from '@angular/core';
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Task[]=[];
  constructor() { }
}
