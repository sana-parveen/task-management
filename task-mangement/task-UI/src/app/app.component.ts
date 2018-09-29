import { Component } from '@angular/core';
import { TaskService } from './home/task-service.service';
import { Task } from "./model";
import { ObjectListComponent } from "./home/object-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loading: boolean = false;
  taskList: Task[];
  protected objectListComponent: ObjectListComponent;

  constructor(private taskService: TaskService) {
    this.objectListComponent = new ObjectListComponent(this.taskService);
    this.getTaskList()
  }

  getTaskList() {
    this.getLocalData();
    this.taskService.getTaskList(this.objectListComponent.getBaseUrl() + "/gettask").subscribe(data => {
        this.loading = true;
        this.taskList = data;
    })
  }

  /*
    *  Just to test with localstorage data without the API
    *  Needs to be removed after API integration
    *

  */
  getLocalData(): Task[] {
    let keys = Object.keys(localStorage),
      i = keys.length;

    this.taskList = [{
      id: null,
      name: "",
      description: "",
      completed: false
    }]

    while (i--) {
      if (keys[i] === `task.id`) {
        this.taskList[0].id = localStorage.getItem(`task.id`)
      } else if (keys[i] === `task.description`) {
        this.taskList[0].description = localStorage.getItem(`task.description`)
      } else if (keys[i] === `task.name`) {
        this.taskList[0].name = localStorage.getItem(`task.name`)
      } else if (keys[i] === `task.completed`) {
        this.taskList[0].completed = false;
      }
    }
    return this.taskList;
  }

}
