import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: false,
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent
{
  @Input({required: true}) user!: User;
  @Input({ required: true}) selected!: boolean;
  @Output() selectedUser = new EventEmitter<string>();

  get imagePath()
  {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser()
  {
     this.selectedUser.emit(this.user.id);
  }
}
