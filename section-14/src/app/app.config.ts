import { ApplicationConfig } from "@angular/core";
import { routes } from "./app.routes";
import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";

export const appConfig: ApplicationConfig=
{
    // withComponentInputBinding: Used for enabling the access of dynamic routes in components
    // withRouterConfig paramsInheritanceStrategy: 'always': used for enabling full path access of dynamic child routes child components
    providers:
    [
        provideRouter(routes, withComponentInputBinding(), withRouterConfig({paramsInheritanceStrategy: 'always'}))
    ],
}