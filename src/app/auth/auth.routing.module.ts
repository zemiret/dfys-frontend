import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@app/auth/login-page/login-page.component';
import { RegisterPageComponent } from '@app/auth/register-page/register-page.component';
import { RouteNames } from '@shared/constants/routes';

export const routes: Routes = [
  {
    path: RouteNames.AUTH,
    children: [
      { path: RouteNames.LOGIN, component: LoginPageComponent },
      { path: RouteNames.REGISTER, component: RegisterPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
