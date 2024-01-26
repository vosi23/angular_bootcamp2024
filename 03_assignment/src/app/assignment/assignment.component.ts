import { ArrayType } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: "app-assignment",
    templateUrl: "assignment.component.html",
    styles:`
        .whiteClass
        {
            color: white;
        }
    `
})

export class assignmentComponent
{
    secretContentVisibility: boolean = false;
    logs = [];

    changeSecretContentVisibility()
    {
        this.secretContentVisibility = !this.secretContentVisibility;
        this.logs.push(Date.now())
    }

    getBackgroundColor()
    {
        if (this.logs.length > 5)
            return 'blue';
        
        // else return default color -> white 
        return 'white';
    }
}
