import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardPageComponent } from './dashboard/dahsboard-page/dahsboard-page.component';
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';

const routes: Routes = [
  { path: '', component: DahsboardPageComponent },
  { path: 'settings', component: SettingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
