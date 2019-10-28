import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesPageComponent } from './activities/activities-page/activities-page.component';
import { DahsboardPageComponent } from './dashboard/dahsboard-page/dahsboard-page.component';
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';
import { SkillsPageComponent } from './skills/skills-page/skills-page.component';

export const routes: Routes = [
  { path: '', component: DahsboardPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'skills/:id', component: SkillsPageComponent },
  { path: 'skills/:id/activities/:id', component: ActivitiesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
