import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Task} from "../../models/Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public name:string|null=null;
  public type:string|null=null;

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
  }

  public addTask(){
    if(this.name!=null && this.type!=null){
      this.tasksService.tasks.push(new Task(this.name, this.type));
    }
  }

}
