import { CanMatchFn, Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn= (route, segments) =>
    {
        //...
        return true;


        // if the result is false and you want to redirect somewhere else
        // const router= inject(Router);
        // return new RedirectCommand(router.parseUrl('/unauthorized'));
    }

export const routes: Routes=
[
    // guards
    // canMatch: tipically the guard should be set up, canActivate
    // this can be used to url path and children too
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
        canMatch: [dummyCanMatch],
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
                component: TasksComponent,
                
                // title: resolveTitle(); 
            },
            {
                // canDeactivate can be used where let's say a state is not complete
                // like here for creating a new ticket, if the date it's not completed
                // when a ticket is created than this canDeactivate can be set true
                // and don't let the user save without filling all needed information
                // after that can be disabled again
                // true means that can exit, which means can deactivate the actual route
                // canDeactivate: [true],
                path:'tasks/new', // localhost/users/<id>/tasks/new
                component: NewTaskComponent,
                title: 'Create new task!'
            }
        ]
    },
    {
        // wild card -> ** 
        path: '**',
        component: NotFoundComponent
    }
]
