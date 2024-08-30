import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    // in the exports here needs only be added
    // the component which is using this TasksModule
    // the parent let's say
    // so in our case is Tasks component, the one which is called
    // from app component
    exports: [TasksComponent],
    // here we import he date pipe, now the question is
    // why do we need it if we included the browser module
    // in app module
    // Answer: every module MUST work on it's own and to not depend
    // by other external module
    // In this case we need to import the CommonModule and FormsModule
    imports: [ CommonModule, FormsModule, SharedModule ]
})
export class TasksModule {}
