import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated // CAN BE ALSO NONE OR ShadowDOM, but the emulated is recommended and the default one also
})

export class ServerElementComponent
{
  @Input() element: {type: string, name: string, content: string};


}
