import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '@shared/constants/endpoints';
import { CookieService } from 'ngx-cookie-service';
import { finalize, tap } from 'rxjs/operators';
import { User } from './user.model';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private userStore: UserStore,
    private cookieService: CookieService,
    private http: HttpClient
  ) {}

  login(username: string, password: string) {
    this.userStore.setLoading(true);

    return this.http
      .post<User>(Endpoints.LOGIN, {
        username,
        password,
      })
      .pipe(
        tap(user => {
          const csrfToken = this.cookieService.get('csrftoken');
          this.userStore.update(state => ({
            user: {
              username: user.username,
              email: user.email,
            },
            csrfToken,
          }));

          this.userStore.saveToLocalStorage(user);
        }),
        finalize(() => this.userStore.setLoading(false))
      );
  }

  logout() {
    this.http.post(Endpoints.LOGOUT, {}).subscribe();
    this.userStore.resetLocalStorage();
    this.userStore.reset();
  }

  saveRedirectUrl(redirectUrl: string) {
    this.userStore.update(state => ({
      redirectUrl,
    }));
  }
}
