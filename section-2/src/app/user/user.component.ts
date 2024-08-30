import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent
{
  // using signals
  // avatar = input<string>('default value')
  // or make as mandatory
  // avatar= input.required<string>();
  // name= input.required<string>();
  // imagePath= computed(() => {return 'assets/users/' + this.avatar()});
  
  // Output have the same behaviour as Event Emitter, so
  // both methods are the same, use what you want
  // select = output<string>();

  // required parameter makes the parameter as mandatory
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
