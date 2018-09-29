import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from "./task-service.service";
import { Task } from "../model";
/**
* This class represents the lazy loaded HomeComponent.
*/
@Component({
    selector: 'object-list',
    templateUrl: 'object-list.component.html'
})
export class ObjectListComponent implements OnInit {
    isCompletedDuplicate: boolean = false;
    btnEnable: boolean = false;
    compBtnEnable: boolean = false;
    checkedTask: Array<any> = [];
    private baseUrl: string = "https://ipaddress";
    @Input() taskList: Task[];
    constructor(private taskService: TaskService) { }

    ngOnInit() { }

    checkboxChange(isChecked, task: Task) {
        if (!task.completed && isChecked) {
            this.compBtnEnable = isChecked;
        }
        if (isChecked) {
            this.checkedTask.push(task.id)
        }
        this.btnEnable = isChecked;
        return task;
    }

    isDisabled(isCompleted: boolean) {
        if (isCompleted) {
            this.isCompletedDuplicate = true;
        }
        return this.isCompletedDuplicate;
    }

    getBaseUrl() {
        return this.baseUrl;
    }

    constructUrl(action: string): string {
        let url = this.getBaseUrl() + `/${action}/`;
        let taskList: string = "";
        this.checkedTask.forEach(id => {
            taskList += `?${id}`
        })
        url = url + taskList;
        return url;
    }

    isCompleted() {
        this.taskService.isCompleted(this.constructUrl("iscompleted")).subscribe(data => {
            // success message
            this.checkedTask = []
        })
    }

    deleteTasks() {
        this.taskService.deleteTask(this.constructUrl("deletetask")).subscribe(data => {
            //success message
            this.checkedTask = []
        })
    }


}