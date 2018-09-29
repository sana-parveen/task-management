import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ObjectAddComponent } from './home/object-add.component';
import { ObjectListComponent } from "./home/object-list.component";
import { TaskService } from "./home/task-service.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ObjectAddComponent,
    ObjectListComponent
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

