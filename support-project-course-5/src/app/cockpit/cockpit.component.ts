import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent
{
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = ''; // Replaced with the html local reference
  // newServerContent = ''; // Replaced with the viewChild element reference
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement)
  {
    // this.serverContentInput.nativeElement = 'something!' -> bad practice
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement)
  {
    this.blueprintCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement });
  }

}
