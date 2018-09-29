import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from "../model";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class TaskService {

    constructor(private http: HttpClient) { }

    getTaskList(url: string): Observable<any> {
        return this.http.get(url);
    }

    sendTask(url: string, task: Task): Observable<any> {
        return this.http.post(url, task).pipe(
            catchError(this.handleError<Task>('sendTask'))
        );
    }

    deleteTask(url: string, task?: Task[]) {
        return this.http.delete(url).pipe(
            tap(data => {}),
            catchError(this.handleError<Task>('deleteTask'))
          );
    }

    isCompleted(url: string) {
        return this.http.post(url, {}).pipe(
            tap(data => {}),
            catchError(this.handleError<Task>('tasks completed'))
        )
    }

    private handleError<T> (operation, result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return (operation);
        };
      }
}