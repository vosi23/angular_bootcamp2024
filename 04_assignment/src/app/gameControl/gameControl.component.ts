import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-gameControl',
    templateUrl: 'gameControl.component.html',
    styleUrl: 'gameControl.component.css'
})

export class gameControlComponent
{
    @Output() intervalFired = new EventEmitter<number>();
    interval;
    lastNumber = 0;

    onStartGame()
    {
        this.interval = setInterval(() => {
            this.intervalFired.emit(this.lastNumber + 1);
            this.lastNumber++;
        }, 1000);
    }

    onStopGame()
    {
        clearInterval(this.interval);
    }
}
