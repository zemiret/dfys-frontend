import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '@app/auth/auth.routing.module';
import { HttpAuthInterceptorService } from '@app/auth/http-auth-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptorService,
      multi: true,
    },
    CookieService,
  ],
})
export class AuthModule {}
