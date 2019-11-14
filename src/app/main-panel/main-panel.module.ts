import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@app/angular-material.module';
import { DashboardPageComponent } from '@app/main-panel/dahsboard-page/dashboard-page.component';
import { MainPanelRoutingModule } from '@app/main-panel/main-panel-routing.module';
import { ActivitiesModule } from './activities/activities.module';
import { ActivityCardComponent, SkillsSidebarComponent } from './components';
import { MainPanelPageComponent } from './main-panel-page/main-panel-page.component';
import { SkillsModule } from './skills/skills.module';

@NgModule({
  declarations: [SkillsSidebarComponent, MainPanelPageComponent, ActivityCardComponent, DashboardPageComponent],
  imports: [CommonModule, ActivitiesModule, SkillsModule, AngularMaterialModule, MainPanelRoutingModule],
})
export class MainPanelModule {}
