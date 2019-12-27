import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CookieService } from 'ngx-cookie-service';
import { User, UserState } from './user.model';

const enum LOCALSTORAGE_KEYS {
  USERNAME = 'username',
  EMAIL = 'email',
}

export function createInitialState(): UserState {
  return {
    user: {
      username: '',
      email: '',
    },
    csrfToken: '',
    redirectUrl: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends Store<UserState> {
  constructor(private cookieService: CookieService) {
    super(createInitialState());

    this.update(() => this.getFromLocalStorage());
  }

  getFromLocalStorage(): UserState {
    return {
      user: {
        username: localStorage.getItem(LOCALSTORAGE_KEYS.USERNAME) || '',
        email: localStorage.getItem(LOCALSTORAGE_KEYS.EMAIL) || '',
      },
      csrfToken: this.cookieService.get('csrftoken'),
      redirectUrl: '',
    };
  }

  saveToLocalStorage(user: User) {
    localStorage.setItem(LOCALSTORAGE_KEYS.USERNAME, user.username);
    localStorage.setItem(LOCALSTORAGE_KEYS.EMAIL, user.email);
  }

  resetLocalStorage() {
    localStorage.clear();
  }
}
