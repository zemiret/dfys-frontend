import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserState } from './user.model';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
  constructor(protected store: UserStore) {
    super(store);
  }

  get isLoggedIn(): boolean {
    return this.getValue().user.username.length > 0;
  }
}
