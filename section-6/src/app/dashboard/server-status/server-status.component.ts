import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core';

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
export class ServerStatusComponent implements OnInit, OnDestroy
{
  // with the following line we force to take only a value
  // of the following ones: online, offline, unknown
  // If we try to assign any other value to currenStatus
  // then will complain about it and not compile further
  currentStatus: 'online' | 'offline' | 'unknown'= 'online';

  private idInterval?: ReturnType<typeof setInterval>;

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
    this.idInterval= setInterval(() => {
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

  // ngOnDestroy has the same behavior as a destructor
  ngOnDestroy(): void
  {
    clearTimeout(this.idInterval);
  }
  // there is also another alternative of ngOnDestroy
  // a newer functionality which will not work on older versions
  // private destroyRef= inject(DestroyRef);
  // before ending ngOnInit function you will need to place
  // this.destroyRef.onDestroy(() =>
  // {
  //   clearInterval(interval);
  // });
  // I prefer the classic method, I found this "elegant" method to be odd 
}
