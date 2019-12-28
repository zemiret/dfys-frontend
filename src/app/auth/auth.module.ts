import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '@app/auth/auth.routing.module';
import { HttpAuthInterceptorService } from '@app/auth/http-auth-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LogoutButtonComponent,
    RegisterPageComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptorService,
      multi: true,
    },
    CookieService,
  ],
  exports: [LogoutButtonComponent],
})
export class AuthModule {}
