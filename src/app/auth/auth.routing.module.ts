import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@app/auth/login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [{ path: 'login', component: LoginPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
