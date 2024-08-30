import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { ticketsI } from './support-tickets.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent
{
  tickets: ticketsI[]= [];

  onAddTicket(content: {title: string, text:string}): void
  {
    const ticket: ticketsI=
    {
      title: content.title,
      request: content.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket);
  }

  onResolveTicket(id: string)
  {
    // suggest way to do it
    this.tickets= this.tickets.map((ticket) =>
      {
        if (ticket.id == id)
        {
          return { ...ticket, status: 'resolved' };
        }

        return ticket;
    });    
  }
}
