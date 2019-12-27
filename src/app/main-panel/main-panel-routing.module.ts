import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from '@app/auth/is-logged-in/is-logged-in.guard';
import { ActivitiesPageComponent } from '@app/main-panel/activities/activities-page/activities-page.component';
import { DashboardPageComponent } from '@app/main-panel/dahsboard-page/dashboard-page.component';
import { MainPanelPageComponent } from '@app/main-panel/main-panel-page/main-panel-page.component';
import { SkillsPageComponent } from '@app/main-panel/skills/skills-page/skills-page.component';

export const routes: Routes = [
  {
    path: 'main-panel',
    component: MainPanelPageComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      { path: '', component: DashboardPageComponent },
      { path: 'skills/:id', component: SkillsPageComponent },
      { path: 'activities/:id', component: ActivitiesPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPanelRoutingModule {}
