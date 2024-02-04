import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent
{
  serverElements = [{type: 'server', name: 'server1', content: 'just a test server!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string})
  {
    this.serverElements.push(
    {
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string})
  {
    this.serverElements.push(
      {
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
  }
}
