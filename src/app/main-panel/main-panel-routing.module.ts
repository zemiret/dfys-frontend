import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from '@app/auth/services';
import { ActivitiesPageComponent } from '@app/main-panel/activities/pages';
import {
  DashboardPageComponent,
  MainPanelPageComponent,
} from '@app/main-panel/pages';
import { SkillsPageComponent } from '@app/main-panel/skills/pages';
import { RouteNames } from '@shared/constants/routes';

export const routes: Routes = [
  {
    path: RouteNames.MAIN_PANEL,
    component: MainPanelPageComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      { path: '', component: DashboardPageComponent },
      { path: `${RouteNames.SKILLS}/:id`, component: SkillsPageComponent },
      {
        path: `${RouteNames.ACTIVITIES}/:id`,
        component: ActivitiesPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPanelRoutingModule {}
