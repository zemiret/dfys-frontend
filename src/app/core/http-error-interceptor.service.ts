import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        console.log(
          'HTTP INTERCEPTOR CAUGHT ERROR. TODO: NOTIFICATION FRAMEWORK'
        );
        // TODO: Redirect to login on 401 (user has been "kicked"). And reset user store

        console.log(error);
        return throwError(error);
      })
    );
  }
}
