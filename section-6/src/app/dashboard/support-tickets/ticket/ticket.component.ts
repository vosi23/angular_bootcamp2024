import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ticketsI } from '../support-tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent
{
  @Input({required: true}) data!: ticketsI;
  @Output() resolve= new EventEmitter();

  detailsVisible= false;

  onToggleDetails()
  {
    this.detailsVisible= this.detailsVisible == false ? true : false;
    // or
    // this.detailsVisible= !this.detailsVisible;
  }

  onResolveButton()
  {
    this.resolve.emit();
  }
}
