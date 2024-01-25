import { Component } from "@angular/core";

@Component({
    selector: "app-user",
    templateUrl: "user.component.html"
})

export class userComponent
{
    username: string = '';

    checkUserIfValid()
    {
        if(this.username == '')
            return false;
        else
            return true;
    }
}
