import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// decorator
@Component({
  selector: 'app-root',
  // standalone will be false if also will be not mentioned in component
  standalone: false,
  // imports is used only if standalone is true
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent
{
  users = DUMMY_USERS;
  user_selected?: string;

  onSelectUser(id: string)
  {
    this.user_selected= id;
  }

  get selectedUser()
  {
    return this.users.find((user) => user.id == this.user_selected);
  }
}
