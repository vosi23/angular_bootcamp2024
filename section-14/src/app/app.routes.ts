import { Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";

export const routes: Routes=
[
    {
        // the url path
        path: '',   // by default if the string is empty the path is localhost:port
                    // if the path will be like 'user', then the full path will be localhost:port/user
        // component associated with specific path
        component: NoTaskComponent
    },
    {
        path: 'users/:userId', // localhost/users/<id>
        component: UserTasksComponent
    }
]
