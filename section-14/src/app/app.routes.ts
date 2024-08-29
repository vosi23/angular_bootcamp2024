import { Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";

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
        component: UserTasksComponent,
        // nested routes
        // children url's are actually a special feature provided by angular
        // children routes here can be also moved in another file
        // for keeping straight and much cleaner
        // but I will choose to leave it here because there are not so many
        children:
        [
            // redirection
            {
                path: '',
                redirectTo: 'tasks',
                // choices:  'prefix', 'full'
                pathMatch: 'prefix'
            },
            {
                path:'tasks', // localhost/users/<id>/tasks
                component: TasksComponent
            },
            {
                path:'tasks/new', // localhost/users/<id>/tasks/new
                component: NewTaskComponent
            }
        ]
    },
    {
        // wild card -> ** 
        path: '**',
        component: NotFoundComponent
    }
]
