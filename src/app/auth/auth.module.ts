import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';
import { LogoutButtonComponent } from '@app/auth/components';
import { LoginPageComponent } from '@app/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from '@app/auth/pages/register-page/register-page.component';
import { HttpAuthInterceptorService } from '@app/auth/services';
import { CookieService } from 'ngx-cookie-service';

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
