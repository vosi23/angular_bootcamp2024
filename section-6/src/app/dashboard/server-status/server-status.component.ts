import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

// OnInit is associated with ngOnInit here
// basically force that this class must have the ngOnInit
// function
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown'= 'online';

  // in the constructor should be placed small commands
  // which not take much time
  // everything more complex, like a http request,
  // should be made on ngOnInit instead of constructor.
  // For initializing variables the constructor is a great choise
  // for this purpose
  constructor()
  {
  }

  ngOnInit()
  {
    setInterval(() => {
      const rnd= Math.random(); // 0 - 1 (0.999)
      if (rnd < 0.5)
      {
        this.currentStatus = 'online';
      } else if(rnd < 0.9)
      {
        this.currentStatus= 'offline';
      } else
      {
        this.currentStatus= 'unknown'
      }
    }, 5000);
  }
}
