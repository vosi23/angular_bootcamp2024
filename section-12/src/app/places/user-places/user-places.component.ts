import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit
{
  places = signal<Place[] | undefined>(undefined);
  isFetching= signal(false);
  error= signal('');

  private placesService= inject(PlacesService);

  // the http requests are done on angular by using special services
  
  private destroyRef= inject(DestroyRef);


  ngOnInit(): void
  {
    this.isFetching.set(true);
    const subscription= this.placesService.loadUserPlaces()
    .subscribe({
      next: (places) => 
      {
        // console.log(resData);
        this.places.set(places);
        //this.error.set('Something went wrong fetching the available places. Please try again later');
      },
      error: (error) =>
      {
        console.log(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    });

    this.destroyRef.onDestroy(() =>
      subscription.unsubscribe()
    );
  }
}
