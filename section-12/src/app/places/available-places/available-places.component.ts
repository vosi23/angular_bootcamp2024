import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit
{
  places = signal<Place[] | undefined>(undefined);
  isFetching= signal(false);
  error= signal('');

  // the http requests are done on angular by using special services
  private placesService= inject(PlacesService);
  private httpClient= inject(HttpClient);
  private destroyRef= inject(DestroyRef);


  ngOnInit(): void
  {
    this.isFetching.set(true);
    const subscription= this.placesService.loadAvailablePlaces()
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

  onSelectPlace(selectedPlace: Place)
  {
    const subscription= this.placesService.addPlaceToUserPlaces(selectedPlace.id).subscribe({
      next: (resData) => console.log(resData),
    });

    this.destroyRef.onDestroy(() =>
      subscription.unsubscribe()
    );
  }
}
