import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, RegisterPageComponent } from '@app/auth/pages';
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
