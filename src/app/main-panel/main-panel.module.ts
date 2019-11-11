import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivitiesModule } from './activities/activities.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SkillsModule } from './skills/skills.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActivitiesModule,
    DashboardModule,
    SkillsModule,
  ],
})
export class MainPanelModule {
}
