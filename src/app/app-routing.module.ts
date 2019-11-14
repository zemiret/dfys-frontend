import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelPageComponent } from '@app/main-panel/main-panel-page/main-panel-page.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { SettingsPageComponent } from '@app/settings/settings-page/settings-page.component';

export const routes: Routes = [
  // { path: '', component: MainPanelPageComponent },
  // { path: '', children: MAIN_PANEL_ROUTES },
  // { path: 'settings', component: SettingsPageComponent },
  // { path: 'skills/:id', component: SkillsPageComponent },
  // { path: 'skills/:id/activities/:id', component: ActivitiesPageComponent },
  { path: '', redirectTo: 'main-panel', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
