import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesPageComponent } from '@app/main-panel/activities/activities-page/activities-page.component';
import { DashboardPageComponent } from '@app/main-panel/dashboard/dahsboard-page/dashboard-page.component';
import { SkillsPageComponent } from '@app/main-panel/skills/skills-page/skills-page.component';
import { SettingsPageComponent } from '@app/settings/settings-page/settings-page.component';

export const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'skills/:id', component: SkillsPageComponent },
  { path: 'skills/:id/activities/:id', component: ActivitiesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
