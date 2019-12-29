import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserQuery } from '@app/auth/state/user';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthInterceptorService implements HttpInterceptor {
  constructor(private userQuery: UserQuery) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const csrf = this.userQuery.getValue().csrfToken;
    return next.handle(
      req.clone({
        setHeaders: { 'X-CSRFToken': csrf },
        withCredentials: true,
      })
    );
  }
}
