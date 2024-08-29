import { Component, computed, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnChanges
{
  @Input({required:true}) userId!:string;
  private usersService= inject(UsersService);

  // here I can say that I learned a important lesson in angular
  // we cannot compute something inside of the class like in the following line
  // userName= this.usersService.users.find((u) => u.id == this.userId)?.name;

  // I met this issue because in the tutorial of this section was used signals, input() instead
  // of Input() decorator like I did

  // And also in the example was used the computed function, this function can be used with signals
  // somehow works with input decorator as well, but returns a more odd string, with Computed in front of the string
  // userName= computed(() => this.usersService.users.find((u) => u.id == this.userId)?.name);


  // After that I remembered that we can use the ngOnChanges here. And this is the working variant
  // Of course that are multiple ways to solve this, at least I believe that are multiple ways, but as first ideea this came in my mind.
  // Hope I'll keep this in my mind from now on. 
  userName?: string;

  ngOnChanges(changes: SimpleChanges): void
  {
    this.userName= this.usersService.users.find((u) => u.id == this.userId)?.name;
  }
}
