import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@app/angular-material.module';
import { DashboardPageComponent } from '@app/main-panel/dahsboard-page/dashboard-page.component';
import { MainPanelRoutingModule } from '@app/main-panel/main-panel-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ActivitiesModule } from './activities/activities.module';
import { SkillsSidebarComponent } from './components';
import { MainPanelPageComponent } from './main-panel-page/main-panel-page.component';
import { SkillsModule } from './skills/skills.module';

@NgModule({
  declarations: [
    SkillsSidebarComponent,
    MainPanelPageComponent,
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ActivitiesModule,
    SkillsModule,
    AngularMaterialModule,
    MainPanelRoutingModule,
  ],
  exports: [],
})
export class MainPanelModule {}
