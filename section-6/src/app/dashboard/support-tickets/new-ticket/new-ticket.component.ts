import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { ticketsI } from '../support-tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent
{
  // with view child you can access the markup code
  // in this example we take the data from form and pass it over
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // Also with ViewChild you can access a component markup
  // like in the following example
  // @ViewChild(ButtonComponent) buttonComponent?: ElementRef<ButtonComponent>
  // and will search after a component like this in the html and if founds then will
  // store the reference in the named variable

  // also there is the @ViewChildren as well which have multiple selection
  // Example: can select more components with the same type, like ButtonComponent
  // @ViewChildren(ButtonCompon)

  @Output() add= new EventEmitter<{title: string, text: string}>();

  onSubmit(ticketTitle: string, ticketText: string)
  {
    this.add.emit({
      title: ticketTitle,
      text: ticketText
    });

    this.form?.nativeElement.reset();
  }

}
