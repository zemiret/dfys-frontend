import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from '@app/settings/settings-page/settings-page.component';
import { RouteNames } from '@shared/constants/routes';

export const routes: Routes = [
  { path: RouteNames.SETTINGS, component: SettingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
