import { Component, OnInit } from '@angular/core';
import { Task } from "../model";
import { TaskService } from './task-service.service';
import { ObjectListComponent } from "./object-list.component";

@Component({
    selector: "object-add",
    templateUrl: "object-add.component.html"
})

export class ObjectAddComponent implements OnInit {

    task: Task;
    private taskService: TaskService;
    private objectListComponent: ObjectListComponent

    constructor() {
        this.task = this.getDefaultTask();
    }

    ngOnInit() {}

    getDefaultTask(): Task {
        return {
            id: null,
            name: "",
            description: "",
            completed: false
        }
    }

    sendTask(task: Task) {
        let ind = 0;
        for (let key in task) {
            if (task.hasOwnProperty(key)) {
                task.id = `A${ind}`;
                ind++;
                localStorage.setItem(`task.${key}`, task[key])
            }
         }
        this.taskService.sendTask(this.objectListComponent.getBaseUrl()+"/sendtask", task)
    }

    clear() {
        this.task = this.getDefaultTask();
    }

}
